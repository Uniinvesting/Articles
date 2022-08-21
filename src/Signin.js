import React from 'react'
import "./ext_css/Signin-create-account.css"
import {BiLogIn} from "react-icons/bi"

const Signin = () => {
  return (
    <div className="panel">
      <h3>Sign In</h3>
      <input className="textbox" type="email" placeholder="Email" />
      <input className="textbox" type="password" placeholder="Password" />
      <div className="button-container"><input className="button" type="button" onClick={() => {console.log("Yes")}} value="Sign In" /><BiLogIn className="icon" /></div>
    </div>
  )
}

export default Signin