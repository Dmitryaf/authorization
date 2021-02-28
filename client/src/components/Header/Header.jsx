import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/userReducer';
import styles from './Header.module.scss';

function Header() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <div className={styles.btns}>
        {!isAuth && (
          <NavLink
            to='/login'
            activeClassName={styles.active}
            className={styles.link}
          >
            <span>Sign in</span>
          </NavLink>
        )}

        {!isAuth && (
          <NavLink
            to='/register'
            activeClassName={styles.active}
            className={styles.link}
          >
            <span>Sign up</span>
          </NavLink>
        )}

        {isAuth && (
          <button
            onClick={() => dispatch(logout())}
            type='button'
            className={styles.link}
          >
            <span>Log out</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
