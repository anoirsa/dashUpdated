import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div>
      <div class="body"></div>
      <div class="grad"></div>
      <div class="header">
        <div>Fin<span>Tricity</span></div>
      </div>
      <br></br>

      <div class="login">
        <input type="text" placeholder="username" name="user" /><br />
        <input type="password" placeholder="password" name="password" /><br />
        <input type="button" value="Login" />
      </div>

    </div>

  )
}

export default Login
