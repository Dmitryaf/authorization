import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user';

function App() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        {!isAuth && (
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registration} />
            <Redirect to='/login' />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
