import React, { useState } from 'react'
import { Input } from "reactstrap"
import "../ext_css/Signin-create-account.css"
import {BiLogIn} from "react-icons/bi"

const SignIn = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const signinEvent = () => {
    if (email === "") {
      alert("Please type your username and password");
    }
    else if (email === "guest@gmail.com" && password === "12341234") {
      window.location = "/home";
    }
    else {
      alert("Username or password incorrect!");
    }
  }

  return (
    <div className="panel">
      <h3>Sign In</h3>
      <Input className="textbox" name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input className="textbox" name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <div className="button-container">
        <Input className="button" name="signin" type="button" onClick={signinEvent} value="Sign In" />
        <BiLogIn className="icon" size={22}/>
      </div>
      <p>Don't have an account? <a href="/sign-up">Create one!</a></p>
    </div>
  )
}

export default SignIn