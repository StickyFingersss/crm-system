import styles from './TeamLead.module.css';

import MiniToDos from '../../components/MiniToDos/MiniToDos';
import ModalButtonLead from '../../components/ModalButtonLead/ModalButtonLead';
import { ClientList } from '../../components/ClientList/ClientList';
import { useMySelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';


export const TeamLead = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  const navigate = useNavigate()


  if (session?.isAdmin) {
    return (
      <>
        <MiniToDos />
        <ModalButtonLead />
        <ClientList path={'/customer/all'} />
      </>
    );
  } else {
    return (
      <h1 className={styles.h1Err}><img src="/404.gif" alt="" />#Error: Login as team lead or register </h1>
    )
  }  
};
