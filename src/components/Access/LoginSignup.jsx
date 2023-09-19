import './LoginSignup.css'
import React, {useState} from 'react'

import user_icon from '../Assets/user-solid.svg'
import password_icon from '../Assets/lock-solid.svg'
import email_icon from '../Assets/envelope-regular.svg'
const LoginSignup = () => {
  const [action,setAction]=useState("Login");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>
        </div>}
       
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name="" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" name="" placeholder='Password'/>
            </div>
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot password, <span>Click here!</span></div>}
           
            <div className="submit-container">
              <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
              <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
            </div>
      </div>
    </div>
  )
}

export default LoginSignup
