import styles from './Client.module.css';

import { useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';

import { useMyDispatch, useMySelector } from '../../redux/hooks';

import { fetchOneCustomer } from '../../redux/thunkActions';
import { fetchAddCall } from '../../redux/thunkActions/callsActions'

import axios from 'axios';


export const ClientMax = (): JSX.Element => {

  const { id } = useParams()

  const dispatch = useMyDispatch();

  const OneCustomer = useMySelector((store) => store.customerSlice.customer);

  const [value, setValue] = useState('');

  const [user, setUser] = useState('')

  useEffect(() => {
  const response = axios.get(`http://localhost:3000/api/user/${OneCustomer?.manager_id}`);
    response
    .then((data) => setUser(data))
    .catch((err) => console.log(err));
}, [OneCustomer?.manager_id]);

  const chengeSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const comments = useMySelector((store) => store.commentSlice.comments)?.filter((el) => el.customer_id === Number(id)).length;

  useEffect(() => {
    void dispatch(fetchOneCustomer(id));
  }, [dispatch]);

  const addCallHandler = async (): Promise<void> => {
    void dispatch(fetchAddCall(OneCustomer.id));
  };

  // useEffect(() => {
  //   const response = axios.get(`http://localhost:3000/api/customer/${id}`).then((value) => {
  //     console.log('value',value)
  //   });
  // }, []);

  return (
    <div className={styles.oneClientList}>
      <h3>{OneCustomer?.name}</h3>
      <h3>ID: {id}</h3>
      <h3>Comments: {comments}</h3>
      {(user?.data?.name)? <h3>Manager: {user?.data?.name}</h3> : 
      <>
      <h3>Manager: </h3>
      <select
      name='managers' 
      onChange={chengeSelect}>
          <option>John Smit</option>
          <option>Max Revo</option>
          <option>Elena Green</option>
      </select >
      </>
      }

{(OneCustomer?.Status?.name)? <h3>Status: {OneCustomer?.Status.name}</h3> : 
      <>
      <h3>Status: </h3>
      <select 
      name='status' 
      onChange={chengeSelect}
      > 
        {/* онченч -> санка -> бд */}
          <option>Deposit</option>
          <option>No money</option>
          <option>In work</option>
      </select >
      </>
      }
      <h3>email: {OneCustomer?.email}</h3>
      <h3>Balance: {OneCustomer?.balance}</h3>
      <h3>phone number: <button onClick={addCallHandler}>{OneCustomer?.phone}</button></h3>
      
    </div>
  )
}
