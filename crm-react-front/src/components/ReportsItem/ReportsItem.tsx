import styles from './ReportItem.module.css';
import { reportProps } from '../../Types/ReportTypes';

export const ReportsItem = (props: reportProps) => {
  const { manager, calls, deals } = props;

  return (
    <>
      <div className={styles.reportItem}>
        <h3>{manager}</h3>
        <p>Calls: {calls}</p>
        <p>Deals: {deals}</p>
      </div>
    </>
  );
};
