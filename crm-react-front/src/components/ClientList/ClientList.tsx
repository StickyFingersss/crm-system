import styles from './ClientList.module.css';

import { Client } from './Client';

import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchAllCustomers } from '../../redux/thunkActions';
import axios from 'axios';

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
  // const [newInfo, setNewInfo] = useState(customers);

  function buildQueryString(data) {
    setInputModal(!inputModal);
    const queryString = Object.entries(data)
      .filter(([_, value]) => value !== null)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    
      const response = axios.get(`http://localhost:3000/api/customer/special?${queryString}`);
      response
        .then((data) => setNewInfo(data.data))
        .catch((err) => console.log(err));
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

  const customers = useMySelector((store) => store.customerSlice.customers);
  console.log("🚀 ~ file: ClientList.tsx:64 ~ ClientList ~ customers:", customers);
  useEffect(() => {
    void dispatch(fetchAllCustomers());
  }, [dispatch]);

  const [newInfo, setNewInfo] = useState([]);
  console.log("🚀 ~ file: ClientList.tsx:69 ~ ClientList ~ newInfo:", newInfo);

  
  useEffect(() => {
    console.log(newInfo);
  }, [newInfo]);

  const resetFilter = () => {
    setNewInfo([]);
    setInputData({
      name: null,
      balance: null,
      id: null,
      manager_id: null,
      createdAt: null,
      status_id: null,
    });
  };

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

      {/* "Кнопка сброса фильтров" */}
      <button type="button" onClick={resetFilter}>Сбросить фильтр</button>

      {/* "навигация" */}

      <NavBar buttons={buttons} />

      {/* карточки клиентов */}
      <div className={styles.containerClients}>
      {newInfo.length === 0 ? (
        customers?.map((customer) => (
          <Client
            key={customer.id}
            id={customer.id}
            name={customer.name}
            balance={customer.balance}
            manager_id={customer.manager_id}
          />
        ))
      ) : (
        newInfo.map((customer) => (
          <Client
            key={customer.id}
            id={customer.id}
            name={customer.name}
            balance={customer.balance}
            manager_id={customer.manager_id}
          />
        ))
      )}
        {/* {customers?.map((customer) => (
          <Client
            id={customer.id}
            name={customer.name}
            balance={customer.balance}
            manager_id={customer.manager_id}
          />
        ))} */}
      </div>
    </div>
  );
};