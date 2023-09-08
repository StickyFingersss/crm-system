import styles from './Client.module.css';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Link as ChakraLink } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Client = ({ id, name, balance, manager_id}): JSX.Element => {
  
  const [user, setUser] = useState('')

  useEffect(() => {
  const response = axios.get(`http://localhost:3000/api/user/${manager_id}`);
    response
    .then((data) => setUser(data))
    .catch((err) => console.log(err));
}, [manager_id]);


  return (
    <div className={styles.oneClientList}>
        <ChakraLink as={ReactRouterLink} to={`/customer/${id}`}>
          {name}
        </ChakraLink>
      <h3>{id}</h3>
      <h3>{balance}</h3>
      <h3>{user?.data?.name}</h3>
      <h3>?????</h3>
      <h3>Status: ????</h3>
    </div>
  );
};
