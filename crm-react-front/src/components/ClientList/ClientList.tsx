import styles from './ClientList.module.css';

import { Client } from './Client';

import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchAllCustomers } from '../../redux/thunkActions';

export const ClientList = (): JSX.Element => {
  const dispatch = useMyDispatch();

  const [inputData, setInputData] = useState({
    name: null,
    balance: null,
    id: null,
    manager_id: null,
    createdAt: null,
    status_id: null,
  });
  const [inputModal, setInputModal] = useState(false);
  const [fieldName, setFieldName] = useState('');

  function buildQueryString(data) {
    setInputModal(!inputModal);
    const queryString = Object.entries(data)
      .filter(([_, value]) => value !== null)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    console.log(queryString);
    return queryString;
  }

  const handleInputChange = (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldName(fieldName);
    setInputModal(!inputModal);
    setInputData({
      ...inputData,
      [fieldName]: event.target.value,
    });
  };

  const buttons = [
    { name: 'Name', callback: handleInputChange('name') },
    { name: 'ID', callback: handleInputChange('id') },
    { name: 'Balance', callback: handleInputChange('balance') },
    { name: 'Responsible', callback: handleInputChange('manager_id') },
    { name: 'Assigned at', callback: handleInputChange('createdAt') },
    { name: 'Status', callback: handleInputChange('status_id') },
  ];

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const customers = useMySelector((store) => store.customerSlice.customers);
  useEffect(() => {
    void dispatch(fetchAllCustomers());
  }, [dispatch]);

  return (
    <div className={styles.mainClientList}>
      {/* модалка поиска по "навигации" */}
      <div className={inputModal ? styles.modalSerchTrue : styles.modalSerchFalse}>
        <div className={styles.serchClient}>
          <input
            type="text"
            placeholder="value"
            value={inputData[fieldName] || ''}
            onChange={(e) => {
              const newValue = e.target.value;
              setInputData((prevInputData) => ({
                ...prevInputData,
                [fieldName]: newValue,
              }));
            }}
          />
          <button
            className={styles.button}
            type="button"
            onClick={() => buildQueryString(inputData)}>
            {'Sent'}
          </button>
        </div>
      </div>

      {/* "навигация" */}

      <NavBar buttons={buttons} />

      {/* карточки клиентов */}
      <div className={styles.containerClients}>
        {customers?.map((customer) => (
          <Client
            id={customer.id}
            name={customer.name}
            balance={customer.balance}
            manager_id={customer.manager_id}
          />
        ))}
      </div>
    </div>
  );
};
