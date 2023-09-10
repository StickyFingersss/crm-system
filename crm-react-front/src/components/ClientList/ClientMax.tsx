import styles from './Client.module.css';

import { useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';

import { useMyDispatch, useMySelector } from '../../redux/hooks';

import { fetchOneCustomer } from '../../redux/thunkActions';
import { fetchAddCall } from '../../redux/thunkActions/callsActions'

import axios from 'axios';
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { InputDealType } from '../../types';
import { fetchAddDeal } from '../../redux/thunkActions/dealsActions';


export const ClientMax = (): JSX.Element => {

  const { id } = useParams()

  const dispatch = useMyDispatch();

  const OneCustomer = useMySelector((store) => store.customerSlice.customer);

  const [value, setValue] = useState('');
  const [isDealModalOpen, setDealModalOpen] = useState(false); //стэйт модалки
  const [inputDeal, setInputDeal] = useState<InputDealType>({ total: 0 }) //стэйт инпута для сделки
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

  //создание звонка
  const addCallHandler = async (): Promise<void> => {
    void dispatch(fetchAddCall(OneCustomer.id));
  };

  //открытие модалки для создания сделки
  const openDealModal = () => {
    setDealModalOpen(true);
  };

  //закрытие модалки для создания сделки
  const closeDealModal = () => {
    setDealModalOpen(false);
  };

  //хэндлер следящий за инпутом сделки
  const changeDealHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputDeal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //записываю информацию для отправки в объект, чтобы аксиос сработал
  const bodyDeal = {inputDeal: inputDeal, id: id};

  //создание сделки
  const addDealHandler = async (): Promise<void> => {
    if(inputDeal.total) {
      void dispatch(fetchAddDeal(bodyDeal));
      setInputDeal({ total: 0 })
      closeDealModal();
    }
  };

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
      <h3>Balance: <button onClick={openDealModal}>{OneCustomer?.balance}</button></h3>
      <h3>phone number: <button onClick={addCallHandler}>{OneCustomer?.phone}</button></h3>
      
      {/* модалка на создание сделки и изменение баланса у пользователя */}
      <Modal isOpen={isDealModalOpen} onClose={closeDealModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Создать новую сделку</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input name='total' value={inputDeal.total} onChange={changeDealHandler} placeholder="Введите сумму сделки" mb="4" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={addDealHandler}>
                Создать
              </Button>
              <Button variant="ghost" onClick={closeDealModal}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
  )
}
