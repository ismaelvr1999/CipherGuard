import React, { useState } from "react";
import "../../styles/simpleFormCard.css";
import { useNavigate } from "react-router-dom";
import {loginRequest} from "../../api/login";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = {
        email,
        password,
      };
      const response = await loginRequest(user);
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
    } catch (error) {
        alert("Email or Password is wrong")
    }
  };

  return (
    <div className="container-simple-card">
      <form className="card" onSubmit={handleLogin}>
        <h1>CipherGuard</h1>
        
        <input
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="form-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        ></input>
        <button className="form-button" >
          Login
        </button>
          <Link to="/sign-up">Go to Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
