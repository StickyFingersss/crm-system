import React from 'react';
import styles from './Manager.module.css'; // Импорт классов стилей из файла
import TaskCreator from '../TaskCreator/TaskCreator';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { removeManager } from '../../redux/slices/managersSlice';

export function Manager(props) {
  const dispatch = useDispatch();
  const { name, id } = props;

  const [openModal, setOpenModal] = React.useState(false);

  const removeManagerFromTeam = async () => {
    await axios.put(`http://localhost:3000/api/managers/${id}`);
    dispatch(removeManager(id));
  };

  return (
    <div className={styles.manager}>
      <h3>{name}</h3>

      {openModal ? (
        <TaskCreator setOpenModal={setOpenModal} />
      ) : (
        <button onClick={() => setOpenModal(!openModal)}>Добавить таску</button>
      )}

      <button onClick={removeManagerFromTeam}>X</button>
    </div>
  );
}
