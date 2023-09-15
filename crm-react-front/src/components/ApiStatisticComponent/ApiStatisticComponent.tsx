import { useEffect, useState } from 'react';
// import axios from 'axios';
import styles from './ApiStatisticComponent.module.css'; // Импортируем модульные стили

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
    <>
      {/* Применяем класс из модульных стилей */}
      <div className={styles['api-statistic']}>
        <h2>Client statistics</h2>
        <p>Clients today: {clientsToday}</p>
        <p>Clients for all time: {clientsTotal}</p>
      </div>
    </>
  );
};
