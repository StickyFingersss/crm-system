import styles from './ManagerPage.module.css';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import { ClientList } from '../../components/ClientList/ClientList';

import { useParams } from 'react-router-dom';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';
import { useEffect, useState } from 'react';
import { fetchManagers } from '../../redux/slices/managersSlice';
import { RootState } from '../../redux/store';

export const ManagerPage = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  const { managers } = useMySelector((state: RootState) => state.managers);
  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchManagers());
  }, [dispatch]);

  const { id } = useParams();

  const [selectedManager, setSelectedManager] = useState({});

  useEffect(() => {
    if (session.isAdmin) {
      setSelectedManager(managers.find((manager) => manager.id === Number(id)));
    } else setSelectedManager(session);
  }, [managers, id, session]);

  const createTaskForManagerBtnTitle = selectedManager
    ? `Create task for ${selectedManager.name}`
    : '';

  return (
    <div className={styles.mainManager}>
      {!session.login && (
        <div>
          <h1 className={styles.h1Err}><img src="/404.gif" alt="" />#Error: Login or register </h1>
        </div>
      )}
      <h1>{selectedManager?.name}'s manager page</h1>
      {!session.isAdmin && <MiniToDos />}
      <ModalButtonAddTodo 
        createTaskForManagerBtnTitle={createTaskForManagerBtnTitle}
        selectedManager={selectedManager}        
      />
      <ClientList path={`/customer/by-manager/${id}`} />
    </div>
  );
};
