import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ViewTeam from "./pages/ViewTeam";
import CreateTeam from "./pages/CreateTeam";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/view-team">
            <ViewTeam />
          </Route>
          <Route path="/create-team">
            <CreateTeam />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
