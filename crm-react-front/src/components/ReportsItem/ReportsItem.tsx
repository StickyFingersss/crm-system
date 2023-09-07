import styles from './ReportItem.module.css';
import { CallType } from '../../types';

export const ReportsItem = (props: CallType) => {
  const { name, count } = props;
  console.log("🚀 ~ file: ReportsItem.tsx:6 ~ ReportsItem ~ props:", props);
  
  return (
    <>
      <div className={styles.reportItem}>
        <h3>{name}</h3>
        <p>Calls: {count}</p>
        <p>Deals: {10}</p>
      </div>
    </>
  );
};
