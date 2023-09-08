import styles from './ClientList.module.css';

import { Client } from './Client';

import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchAllCustomers } from '../../redux/thunkActions';

export const ClientList = (): JSX.Element => {

  const dispatch = useMyDispatch();

  const [inputModal, setInputModal] = useState(false);

  const buttons = [
    { name: 'Name', callback: () => setInputModal(!inputModal) },
    { name: 'ID', callback: () => setInputModal(!inputModal) },
    { name: 'Balance', callback: () => setInputModal(!inputModal) },
    { name: 'Responsible', callback: () => setInputModal(!inputModal) },
    { name: 'Assigned at', callback: () => setInputModal(!inputModal) },
    { name: 'Status', callback: () => setInputModal(!inputModal) },
  ];


  const customers = useMySelector((store) => store.customerSlice.customers);
    useEffect(() => {
    void dispatch(fetchAllCustomers());
  }, [dispatch]);

  return (
    <div className={styles.mainClientList}>
      {/* модалка поиска по "навигации" */}
      <div className={inputModal ? styles.modalSerchTrue : styles.modalSerchFalse}>
        <div className={styles.serchClient}>
          <input type="text" placeholder="value" />
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              setInputModal(!inputModal);
            }}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 26.1 26.1"
              enableBackground="new 0 0 26.1 26.1">
              <path d="m25.806,22.9l-5.4-5.4c-0.2-0.2-0.2-0.4-0.1-0.6 1.1-1.7 1.7-3.7 1.7-5.9 0-6.1-4.9-11-11-11s-11,4.9-11,11 4.9,11 11,11c2.2,0 4.2-0.6 5.9-1.7 0.2-0.1 0.5-0.1 0.6,0.1l5.4,5.4c0.4,0.4 1,0.4 1.4,0l1.4-1.4c0.5-0.5 0.5-1.1 0.1-1.5zm-14.7-4.9c-3.9,0-7-3.1-7-7s3.1-7 7-7 7,3.1 7,7-3.1,7-7,7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* "навигация" */}

      <NavBar buttons={buttons} />

      {/* карточки клиентов */}
      <div className={styles.containerClients}>
        {customers?.map((customer) => <Client id={customer.id} name={customer.name} balance={customer.balance} manager_id={customer.manager_id}/>)}
      </div>
    </div>
  );
};
