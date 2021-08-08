import { Announcement } from "@material-ui/icons";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AiModel from "../pages/aiModel/AiModel";
import BankEnergi from "../pages/bankenergi/BankEnergi";
import HomePage from "../pages/home/HomePage";
import UserList from "../pages/users/UserList";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import './MainDash.css'



function MainDash(props) {
    
    return props.isLoggedIn ? (
        <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="others">
            <div className="others-wrapper">
                <Switch>
                  <Route path="/dash" component={HomePage} exact />
                  <Route path="/dash/announcements" component={Announcement} exact />
                  <Route path="/dash/bankenergi" component={BankEnergi} exact />
                  <Route path="/dash/ai_model" component={AiModel} exact />
                  <Route path="/dash/users" component={UserList} exact />
                </Switch>
            </div>
          </div>
         </div>
      </div>
    ) : (<Redirect to="/" exact/>)
    
  }
  
  export default MainDash;