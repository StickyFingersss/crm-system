import axios from 'axios';

import styles from './Client.module.css';
import { Link as ChakraLink } from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMySelector } from '../../redux/hooks';


export const Client = ({ id, name, balance, manager_id, createdAt, status}): JSX.Element => {

  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  const managersStore = useMySelector((store) => store.managers.managers);
  const statusesStore = useMySelector((store) => store.statusSlice.statuses);
  console.log(statusesStore)
  //Преобразование даты из базы в нормальный вид
  const normalDate = `${createdAt.slice(8, 10)}.${createdAt.slice(5, 7)}.${createdAt.slice(0, 4)}`;

  const [user, setUser] = useState('')
  //состояние для всех доступных для назначения менеджеров
  const [managers, setManagers] = useState([])

  //состояние для всех доступных статусов
  const [statuses, setStatuses] = useState([])

  useEffect(() => {
    if(manager_id !== null) {
    const response = axios.get(`http://localhost:3000/api/user/${manager_id}`);
    response
    .then((data) => setUser(data))
    .catch((err) => console.log(err));}
    
}, [manager_id]);

  //все доступные для назначения менеджеры
  useEffect(() => {
    const response = axios.get(`http://localhost:3000/api/managers`);
      response
      .then((data) => setManagers(data))
      .catch((err) => console.log(err));
  }, [managersStore]);

  //все доступные статусы
  useEffect(() => {
    const response = axios.get(`http://localhost:3000/api/status/all`);
      response
      .then((data) => setStatuses(data))
      .catch((err) => console.log(err));
  }, [statusesStore]);


  const [selectedStatus, setSelectedStatus] = useState(status);

  const changeStatus = (status_id) => {
    axios.put(`http://localhost:3000/api/customer/status/${id}`, {status_id})
  }

  const changeManager = (manager_id) => {
    axios.put(`http://localhost:3000/api/customer/manager/${id}`, {manager_id})
  }
  return (
    <div className={styles.oneClientList}>
        <ChakraLink as={ReactRouterLink} to={`/customer/${id}`}>
          {name}
        </ChakraLink>
      <h3>{id}</h3>
      <h3>{balance}</h3>
      {session.isAdmin ? 
        <select name="manager" onChange={(e) => {
          const newManagerId = e.target.value;
          changeManager(newManagerId);
        }}>
          <option selected>{user.data?.name ? user.data?.name : 'Менеджер не назначен'}</option>
          {managers.data?.map((manager) => (
            <option key={manager.id} value={manager.id}>{manager.name}</option>
          ))}
        </select>
        : 
        <h3>{user.data?.name}</h3>
      }      
      <h3>{normalDate}</h3>
      <select name="status" onChange={(e) => {
        const newStatusId = e.target.value;
        setSelectedStatus(newStatusId);
        changeStatus(newStatusId);
      }}>
        <option selected>{selectedStatus ? selectedStatus : 'Статус не назначен'}</option>
        {statuses.data?.map((status) => (
          <option key={status.id} value={status.id}>{status.name}</option>
        ))}
      </select>
    </div>
  );
};
