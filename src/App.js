import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';

function App() {
  return (
    <div>
      <nav>
        <NavLink exact to='/'>Login</NavLink>
        <NavLink exact to='/account'>Account</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/account' component={Account} />
      </Switch>
    </div>
  );
}

export default App;
