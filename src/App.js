import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withAuth } from "./lib/Auth";

import "./App.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import GeneratorPage from "./pages/generatorPage";
import MenuPage from "./pages/menuPage";
import ChatPage from "./pages/chatPage";
import UserZone from "./pages/userZonePage";
import PremiumInfo from "./pages/premiumInfo";
import PremiumForm from "./pages/premiumForm";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/generator" component={GeneratorPage} />
          <PrivateRoute exact path="/menu" component={MenuPage} />
          <PrivateRoute exact path="/chat" component={ChatPage} />{" "}
          {/*this will be Premium*/}
          <PrivateRoute exact path="/user-zone" component={UserZone} />
          <PrivateRoute exact path="/premium-info" component={PremiumInfo} />
          <PrivateRoute exact path="/premium-form" component={PremiumForm} />
        </Switch>

        {isLoggedIn ? <ChatPage /> : null}
      </div>
    );
  }
}

export default withAuth(App);
