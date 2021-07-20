import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import decode from 'jwt-decode';

import './index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateTeam from './pages/CreateTeam';
import ViewTeam from './pages/ViewTeam';
import Home from './pages/Home';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    const { exp } = decode(refreshToken);
    if (Date.now() / 1000 > exp) {
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />)} />
);

/* This Route will be used in production */

// const RedirectRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (isAuthenticated() ? <Redirect to={{ pathname: '/view-team' }} /> : <Component {...props} />)} />
// );

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <PrivateRoute path='/create-team' exact component={CreateTeam} />
        <PrivateRoute path='/home' exact component={Home} />
        <PrivateRoute path='/view-team/:teamId?/:channelId?' exact component={ViewTeam} />
      </Switch>
    </BrowserRouter>
  );
};
