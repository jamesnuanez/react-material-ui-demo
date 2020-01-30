import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/account' component={Account} />
      </Switch>
    </div>
  );
}

export default App;
