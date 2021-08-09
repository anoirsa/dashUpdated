import './App.css';
import Login from './components/mainPages/Login.jsx';

import MainDash from './components/mainPages/MainDash';
import 'antd/dist/antd.css';
import { Switch } from '@material-ui/core';
import { Redirect, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {
  
  return (
    <div className="App">
      <Login />
     </div>
  );
}

export default App;
