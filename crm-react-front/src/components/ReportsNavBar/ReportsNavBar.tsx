import styles from './ReportsNavBar.module.css';

export const ReportsNavBar = () => {
  return (
    <div className={styles.navbar}>
      <button className={styles.navbarButton}>Manager</button>
      <button className={styles.navbarButton}>Calls</button>
      <button className={styles.navbarButton}>Deals</button>
      <div className={styles.periodSelect}>
        <select>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
    </div>
  );
};
