import axios from 'axios';
import styles from './Comment.module.css';
import { useEffect, useState } from 'react';

export const Comment = ({createdAt, text, user_id}) => {
  const normalDate = `${createdAt.slice(8, 10)}.${createdAt.slice(5, 7)}.${createdAt.slice(0, 4)}`;

    const [user, setUser] = useState('')

    useEffect(() => {
    const response = axios.get(`http://localhost:3000/api/user/${user_id}`);
      response
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [user_id]);

  return (
    <div className={styles.mainComment}>
        <h2>{normalDate}</h2>
        <h2>{text}</h2>
        <h2>{user?.data?.name}</h2>
    </div>
  )
}
