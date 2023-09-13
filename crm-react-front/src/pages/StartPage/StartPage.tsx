import { Link } from 'react-router-dom';
import styles from './StartPage.module.css';
import { useMySelector } from '../../redux/hooks';

export const StartPage = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  return (
    <>
      <h1 className={styles.headline}>Are you:</h1>
      <div className={styles.container}>
        <Link className={styles.link} to={`/manager/${session.userId}`}>
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
