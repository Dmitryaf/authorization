import React from 'react';
import Header from './components/Header/Header';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        {!isAuth && (
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registration} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
