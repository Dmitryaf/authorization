import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.btns}>
        <NavLink
          to="/login"
          activeClassName={styles.active}
          className={styles.link}
        >
          <span>Sign in</span>
        </NavLink>
        <NavLink
          to="/register"
          activeClassName={styles.active}
          className={styles.link}
        >
          <span>Sign up</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
