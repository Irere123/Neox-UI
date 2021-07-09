import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ViewTeam from './pages/ViewTeam';
import CreateTeam from './pages/CreateTeam';
import Register from './pages/Register';
import Login from './pages/Login';
import Questa from './pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/view-team'>
            <ViewTeam />
          </Route>
          <Route path='/create-team'>
            <CreateTeam />
          </Route>
          <Route path='/home'>
            <Questa />
          </Route>
          {/*⚠This Route must go on the bottom of all routes */}
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
