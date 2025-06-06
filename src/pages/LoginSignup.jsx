import React from "react";
import "./css/loginsign.css";
const LoginSignup = () => {
  return (
    <div className="login-sign-up">
      <div className="loginsigin-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Enter Your Password" />
        </div>

        <button>Continue</button>
        <p className="loginsign-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsigup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
