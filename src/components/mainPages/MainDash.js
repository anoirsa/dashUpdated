import { Announcement } from "@material-ui/icons";
import { Route, Switch } from "react-router-dom";
import AiModel from "../pages/aiModel/AiModel";
import BankEnergi from "../pages/bankenergi/BankEnergi";
import HomePage from "../pages/home/HomePage";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import './MainDash.css'



function MainDash() {
    return (
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="others">
            <div className="others-wrapper">
                <Switch>
                  <Route path="/" component={HomePage} exact />
                  <Route path="/announcements" component={Announcement} exact />
                  <Route path="/bankenergi" component={BankEnergi} exact />
                  <Route path="/ai_model" component={AiModel} exact />
                </Switch>
            </div>
          </div>
         </div>
      </div>
    );
  }
  
  export default MainDash;