import React from 'react';
import styles from './Manager.module.css'; // Импорт классов стилей из файла
import TaskCreator from '../TaskCreator/TaskCreator';

export function Manager(props) {
  const { name, calls } = props;
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className={styles.manager}>
      <h3>{name}</h3>

      <p>Call Count: {calls}</p>

      {openModal ? (
        <TaskCreator setOpenModal={setOpenModal} />
      ) : (
        <button onClick={() => setOpenModal(!openModal)}>Добавить таску</button>
      )}
    </div>
  );
}
