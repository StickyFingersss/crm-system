import { useState } from 'react';
import styles from './ApiComponent.module.css'; // Импортируем модульные стили
import axios from 'axios';

export const ApiComponent = () => {
  const [formData, setFormData] = useState({
    currentApi: '',
    newApi: '',
    teamId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    await axios.post('http://localhost:3000/api/advertiser', formData);
    setFormData({
      currentApi: '',
      newApi: '',
      teamId: '',
    });
  };

  return (
    <div className={styles['api-component']}>
      {' '}
      {/* Применяем класс из модульных стилей */}
      <span className={styles.header}>You can change AD api here</span>
      <br />
      <label htmlFor="currentApi">Your current Api:</label>
      <input
        className={styles.input}
        type="text"
        id="currentApi"
        name="currentApi"
        value={formData.currentApi}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="newApi" className={styles.label1}>Input new Api:</label>
      <input
        className={styles.input}
        type="text"
        id="newApi"
        name="newApi"
        value={formData.newApi}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="teamId" className={styles.label2}>Input Team Id:</label>
      <input
        className={styles.input}
        type="text"
        id="teamId"
        name="teamId"
        value={formData.teamId}
        onChange={handleChange}
      />
      <br />
      <button className={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
