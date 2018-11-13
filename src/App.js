import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/' component={() => <h1>home</h1>}/>
      <Route path='/login' component={LoginContainer}/>
      <Route path='/registration' component={RegistrationContainer}/>
    </Switch>
  </div>);

export default App;
