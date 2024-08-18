import React from "react";
import "../../styles/simpleFormCard.css";
import useHandleOnChange from "../../hooks/useHandleOnChange";
import { signUp } from "../../api/user";
import { Link } from "react-router-dom";
const SignUp = () => {
    const {inputs,handleChange} =useHandleOnChange();

    const handleSignUp = async(e)=>{
        e.preventDefault();
        await signUp(inputs).then(()=>{
            alert("User has been registered successfully")
        }).catch((error)=>{
            alert(error.response.data.message);
        })
    };


  return (
    <div className="container-simple-card">
      <form className="card" onSubmit={handleSignUp}>
        <h1>Sign-Up</h1>
        <input
          className="form-input"
          type="text"
          name="first_name"
          value={inputs.first_name || ''}
          onChange={handleChange}
          placeholder="First Name"
          required
        ></input>
        <input
          className="form-input"
          name="last_name"
          value={inputs.last_name || ''}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          required
        ></input>
        <input
          className="form-input"
          name="master_password"
          value={inputs.master_password || ''}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        ></input>
        <input
          className="form-input"
          name="email"
          value={inputs.email || ''}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        ></input>
        <button className="form-button">
            Sign Up
        </button>
        <Link to="/login">Go to Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
