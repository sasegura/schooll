import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AboutUs from "views/AboutUs/AboutUs";
import TermsAndConditions from "views/TermsAndConditions/TermsAndConditions";
import ProfilePage from "views/AuthenticationRequiered/ProfilePage/ProfilePage";
import FAC from "views/FAC/FAC";
import Cookies from "components/Cookies";
import "./translations/i18n";

var hist = createBrowserHistory();

ReactDOM.render(
  <>
    <Router history={hist}>
      <Switch>
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/FAC" component={FAC} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />        
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
    <Cookies /></>,
  document.getElementById("root")
);
