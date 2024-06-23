import React from "react";
import '../../styles/login.css'
const Login = ()=>{
    return(
        <div className="login">
            <div className="card">
                <h1>CipherGuard</h1>
                <input className="form-input" type="email" placeholder="Email"></input>
                <input className="form-input"  type="password" placeholder="Password"></input>
                <button className="form-button">Login</button>
            </div>
        </div>
    );
}

export default Login;