import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeManager } from '../../redux/slices/managersSlice';
import { Link } from 'react-router-dom';

import styles from './WolfsMember.module.css'; // Импорт классов стилей из файла

export default function WolfsMember(props) {
  const dispatch = useDispatch();
  const { name, id } = props;

  const removeManagerFromTeam = async () => {
    await axios.put(`http://localhost:3000/api/managers/${id}`);
    dispatch(removeManager(id));
  };

  return (
    <div className={styles.manager}>
      <Link to={`/manager/${id}`}>
        <h3>{name}</h3>
      </Link>
      <button onClick={removeManagerFromTeam}>Delete</button>
    </div>
  );
}
