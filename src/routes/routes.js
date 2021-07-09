import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import '../App.css';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
