import React from 'react';
import Header from './components/Header/Header';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Registration} />
          <Redirect from='/' to='/login' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
