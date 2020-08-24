import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AppBar from "./Components/Appbar";

import profilePage from "./profilePage";

import Loginform from "./LoginForm";
import SignupForm from "./SignupForm";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Route path="/login" component={Loginform} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/profilepage" component={profilePage} />
    </React.Fragment>
  );
}

export default App;
