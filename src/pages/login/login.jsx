import React, { useState } from "react";
import "../../styles/login/login.css";
import { useNavigate } from "react-router-dom";
import {loginRequest} from "../../api/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = {
        email,
        password,
      };
      const response = await loginRequest(user);
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
    } catch (error) {
        console.log(error.message);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <h1>CipherGuard</h1>
        <input
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="form-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <button className="form-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
