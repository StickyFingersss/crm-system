import React from 'react';
import styles from './Manager.module.css'; // Импорт классов стилей из файла

export function Manager(props) {
  const { name, calls } = props;

  return (
    <div className={styles.manager}>
      <h3>{name}</h3>
      <p>Call Count: {calls}</p>
    </div>
  );
}
