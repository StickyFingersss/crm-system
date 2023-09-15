// import React from 'react';
import styles from './Advertiser.module.css';

import { ApiComponent } from '../../components/ApiComponent/ApiComponent';
import { ApiStatisticComponent } from '../../components/ApiStatisticComponent/ApiStatisticComponent';

export const Advertiser = () => {
  return (
    <>
      <ApiComponent />
      {/* <ApiStatisticComponent /> */}
      <img src="/db.gif" className={styles.img}/>
    </>
  );
};
