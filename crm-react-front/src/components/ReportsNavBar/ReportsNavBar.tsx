import { NavBar } from '../NavBar/NavBar';
import styles from './ReportsNavBar.module.css';
import { useState } from 'react';

export const ReportsNavBar = () => {
  const [status, setStatus] = useState('');
  const testFunc = (str) => {
    setStatus(str);
  };
  const buttons = [
    { name: 'Manager', callback: () => testFunc('Manager') },
    { name: 'Calls', callback: () => testFunc('Calls') },
    { name: 'Deals', callback: () => testFunc('Deals') },
  ];

  const select = ['Day', 'Week', 'Month'];
  return (
    <div className={styles.navbar}>
      <NavBar buttons={buttons} select={select} />
      {/* <button className={styles.navbarButton}>Manager</button>
      <button className={styles.navbarButton}>Calls</button>
      <button className={styles.navbarButton}>Deals</button>
      <div className={styles.periodSelect}>
        <select>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div> */}
    </div>
  );
};
