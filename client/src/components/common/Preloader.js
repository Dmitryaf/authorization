import React from 'react';
import styles from './Preloader.module.scss';

function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__animation}></div>
    </div>
  );
}

export default Preloader;
