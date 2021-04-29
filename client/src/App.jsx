import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user';
import Main from './components/main/Main';
import Preloader from './components/common/Preloader';

function App() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isFetching = useSelector((state) => state.userReducer.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='App'>
        {isFetching ? <Preloader /> : null}
        <Header />
        {!isAuth ? (
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registration} />
            <Redirect to='/login' />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/main' component={Main} />
            <Redirect to='/main' />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
