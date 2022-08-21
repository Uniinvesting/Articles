import React from 'react'
import "../ext_css/Signin-create-account.css"
import {BsCloudPlus} from "react-icons/bs"

function create() {
  // If "password" and "confirm password" fields match, create account
  console.log("Created account")
}

const SignOut = () => {
  return (
    <div className="panel">
      <h3>Create Account</h3>
      <div className="textbox-container">
        <input className="textbox" style={{"width": "100%", "marginRight": "10px"}} type="text" placeholder="First Name" />
        <input className="textbox" style={{"width": "100%"}} type="text" placeholder="Last Name" />
      </div>
      <input className="textbox" type="email" placeholder="Email" />
      <input className="textbox" type="password" placeholder="Password" />
      <input className="textbox" type="password" placeholder="Confirm Password" />
      <div className="button-container">
        <input className="button" type="button" onClick={() => {create()}} value="Create Account" />
        <BsCloudPlus className="icon" size={22}/>
      </div>
      <p>Already have an account? <a href="/">Log in!</a></p>
    </div>
  )
}

export default SignOut