import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './Login.css';
import { checkLoginStatus, loginGo } from './LoginCheckUps';
import MainDash from './MainDash';

const Login = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const onSubmit = () => {
    if (username  == "admin" &&  password == "123456") {
      setIsLoggedIn(true);
    }
  }
 
 
  return !isLoggedIn ? (<div>
    <div class="body"></div>
    <div class="grad"></div>
    <div class="header">
      <div>Fin<span>Tricity</span></div>
    </div>
    <br></br>

    <form class="login" onSubmit={onSubmit} >
      <input 
        type="text"
        placeholder="username"  
        name="username"
        onChange={e => setUsername(e.target.value)}
        
         /><br />
      <input type="password"
             placeholder="password" 
             name="password"
             onChange={e => setPassword(e.target.value)}
            
            
             /><br />
      <button type="submit" className="sumbit--button" >Login</button>
    </form>

    
    
  </div>) : (
    <div>
      <Switch>
      <Route
        path='/dash'
        render={(props) => (
          <MainDash {...props} isLoggedIn={isLoggedIn}  />
        )}
        /> 
        </Switch>
      {isLoggedIn && <Redirect to="/dash"  />}
    
    </div>
  )
  
}

export default Login
/***
 <Route
        path='/dash'
        render={(props) => (
          <MainDash {...props} isLoggedIn={isLoggedIn} />
        )}
      />
 */

 /**
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
  */