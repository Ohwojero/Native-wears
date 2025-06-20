import React, { useState } from "react";
import "./css/loginsign.css";
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [agree, setAgree] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changerHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const signup = async () =>{
    console.log("sign up",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }).then((responseData)=>responseData.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const login = async ()=>{
    console.log("Login",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }).then((responseData)=>responseData.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(state === "Sign Up" && !agree){
      alert("You must agree to the terms of use & privacy policy to sign up.");
      return;
    }
    if(state === "Login"){
      login();
    } else {
      signup();
    }
  };

  return (
    <div className="login-sign-up">
      <div className="loginsigin-container">
        <h1>{state}</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          {state === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changerHandler}
            />
          ) : null}
          <input
            type="email"
            placeholder="Email Address"
           name="email"
           value={formData.email}
           onChange={changerHandler}
            
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={changerHandler}
          />
          <button type="submit">Continue</button>
        
        {state === "Sign Up" ? (
          <p className="loginsign-login">
            Already have an account?
            <span onClick={() => setState("Login")}> Login here</span>
          </p>
        ) : (
          <p className="loginsign-login">
            Create an account?
            <span onClick={() => setState("Sign Up")}> Click Here</span>
          </p>
        )}
        {state === "Sign Up" && (
          <div className="loginsigup-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              id="agree"
            />
            <label htmlFor="agree">
              By continuing, I agree to the terms of use & privacy policy
            </label>
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;


