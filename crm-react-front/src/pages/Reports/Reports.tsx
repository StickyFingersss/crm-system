import { useEffect, useState } from 'react';
import { ReportsItem } from '../../components/ReportsItem/ReportsItem';
// import { ReportsNavBar } from '../../components/ReportsNavBar/ReportsNavBar';

import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchCalls } from '../../redux/thunkActions';

import styles from './Reports.module.css';
import { NavBar } from '../../components/NavBar/NavBar';

export const Reports = () => {
  const calls = useMySelector((store) => store.callsSlice.calls);

  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchCalls());
  }, [dispatch]);

  const buttons = [
    { name: 'name', callback: () => console.log('name') },
    { name: 'calls', callback: () => console.log('calls') },
  ];
  const select = ['Day', 'Week', 'Month'];

  return (
    <>
      <div>Reports</div>
      <div className="container">
        <div className="navbar">
          <NavBar buttons={buttons} select={select} />
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
