import React from 'react';
import styles from './NavigationBar.module.css';

export function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <button className={styles.navigationButton}>Name</button>
      <button className={styles.navigationButton}>Calls</button>
    </div>
  );
}
