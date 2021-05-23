import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__background">
        <span className="login__logo">MovieApp</span>
        <button className="login__button">Sign In</button>
        <div className="login__gradient"/>
      </div>
    </div>
  );
};

export default Login;
