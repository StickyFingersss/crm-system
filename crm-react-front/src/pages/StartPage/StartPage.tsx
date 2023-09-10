import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StartPage.module.css';

export const StartPage = () => {
  return (
    <>
      <h1 className={styles.headline}>Are you:</h1>
      <div className={styles.container}>
        <Link className={styles.link} to="/manager">
          Manager
        </Link>
        <Link className={styles.link} to="/lead">
          Team Lead
        </Link>
        <Link className={styles.link} to="/advertiser">
          Advertiser
        </Link>
        {/* <Link to="/todos">To Task list</Link>
        <Link to="/lead">To TeamLead page</Link> */}
      </div>
    </>
  );
};
