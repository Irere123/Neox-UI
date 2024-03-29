import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./index.css";
import { isAuthenticated } from "./utils/isAuthenticated";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Invites from "./pages/viewteam/Invites";
import CreateTeam from "./pages/viewteam/CreateTeam";
import ViewTeam from "./pages/viewteam/ViewTeam";
import IssuesPage from "./pages/IssuesPage";
import IssuePage from "./pages/IssuePage";
import DashBoard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import CDashboard from "./pages/class/CDashboard";
import Class from "./pages/class/Class";
import Tutors from "./pages/class/Tutors";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

const RedirectRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/view-team" }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <RedirectRoute path="/" exact component={Login} />
        <Route path="/main" exact component={Home} />
        <Route path="/class" exact component={CDashboard} />
        <Route path="/class/id" exact component={Class} />
        <Route path="/tutors" exact component={Tutors} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/create-team" exact component={CreateTeam} />
        <PrivateRoute path="/home" exact component={IssuesPage} />
        <PrivateRoute path="/issue/:issueId" exact component={IssuePage} />
        <PrivateRoute path="/invites" exact component={Invites} />
        <PrivateRoute path="/dashboard" exact component={DashBoard} />
        <PrivateRoute
          path="/view-team/:teamId?/:channelId?"
          exact
          component={ViewTeam}
        />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
