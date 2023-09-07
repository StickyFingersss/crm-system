import { useEffect } from 'react';
import { ReportsItem } from '../../components/ReportsItem/ReportsItem';
import { ReportsNavBar } from '../../components/ReportsNavBar/ReportsNavBar';

import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchCalls } from '../../redux/thunkActions';

import styles from './Reports.module.css';

export const Reports = () => {
  const calls = useMySelector((store) => store.callsSlice.calls);

  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchCalls());
  }, [dispatch]);
  console.log("calls", calls);
  
  return (
    <>
      <div>Reports</div>
      <div className="container">
        <div className="navbar">
          <ReportsNavBar />
        </div>
        <div className="report-list">
          {calls?.map((el, i) => (
            <ReportsItem key={i} name={el.name} count={el.count} />
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
