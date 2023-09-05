import { ReportsItem } from '../../components/ReportsItem/ReportsItem';
import { ReportsNavBar } from '../../components/ReportsNavBar/ReportsNavBar';

import styles from './Reports.module.css';

export const Reports = () => {
  const reportsFromDb = [
    { manager: 'Anton', calls: 23, deals: 46 },
    { manager: 'Sergey', calls: 232, deals: 426 },
    { manager: 'Olesya', calls: 21, deals: 43 },
    { manager: 'Anna', calls: 11, deals: 1 },
  ];
  return (
    <>
      <div>Reports</div>
      <div className="container">
        <div className="navbar">
          <ReportsNavBar />
        </div>
        <div className="report-list">
          {reportsFromDb.map((el, i) => (
            <ReportsItem key={i} manager={el.manager} calls={el.calls} deals={el.deals} />
          ))}
        </div>
        <button
          className={styles.reportButton}
          onClick={() => {
            console.log('first');
          }}>
          Sent report as PDF
        </button>
      </div>
    </>
  );
};
