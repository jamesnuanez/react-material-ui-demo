import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/account' component={Account} />
      </Switch>
    </div>
  );
}

export default App;
