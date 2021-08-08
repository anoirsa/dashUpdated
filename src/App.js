import './App.css';
import Login from './components/mainPages/Login.jsx';

import MainDash from './components/mainPages/MainDash';
import 'antd/dist/antd.css';
import { Switch } from '@material-ui/core';
import { Redirect, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className="App">
      {/**<Route path="/dash" component={MainDash}  exact/> **/}
      <Route
        path='/dash'
        render={(props) => (
          <MainDash {...props} isLoggedIn={isLoggedIn} />
        )}
      />
        
       {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/dash" />}

       
     </div>
  );
}

export default App;
