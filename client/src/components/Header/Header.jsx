import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
function Header() {
  return (
    <div className={styles.header}>
      <NavLink
        to='/download'
        activeClassName={styles.active}
        className={styles.link}
      >
        <span>Download</span>
      </NavLink>
      <NavLink
        to='/files'
        activeClassName={styles.active}
        className={styles.link}
      >
        <span>Files</span>
      </NavLink>
    </div>
  );
}

export default Header;
