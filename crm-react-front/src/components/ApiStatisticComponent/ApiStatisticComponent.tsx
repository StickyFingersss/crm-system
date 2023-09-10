import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ApiStatisticComponent.module.css'; // Импорт стилей

export const ApiStatisticComponent = () => {
  const [clientsToday, setClientsToday] = useState(0);
  const [clientsTotal, setClientsTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todayResponse = { data: { count: 3 } };
        const totalResponse = { data: { count: 500 } };
        // await axios.get('/api/clients/today')
        // await axios.get('/api/clients/total');

        setClientsToday(todayResponse.data.count);
        setClientsTotal(totalResponse.data.count);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles['api-statistic']}>
      <h2>Статистика клиентов</h2>
      <p>Клиентов за сегодня: {clientsToday}</p>
      <p>Клиентов за все время: {clientsTotal}</p>
    </div>
  );
};
