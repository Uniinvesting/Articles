import React from 'react'
import "./ext_css/Signin-create-account.css"
import {BiLogIn} from "react-icons/bi"

function create() {
  // If "password" and "confirm password" fields match, create account
  console.log("Created account")
}

const Create_account = () => {
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
        <BiLogIn className="icon" />
      </div>
    </div>
  )
}

export default Create_account