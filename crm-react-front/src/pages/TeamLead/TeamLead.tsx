import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import ModalButtonLead from '../../components/ModalButtonLead/ModalButtonLead';
import { ClientList } from '../../components/ClientList/ClientList';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchIsAutenticated } from '../../redux/thunkIsAutenticated';

export const TeamLead = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  // useEffect(() => {
  //   console.log('component update');
  // }, [session]);

  if (session.isAdmin) {
    return (
      <>
        <Link to="/todos">Todos</Link>
        <Link to="/managers">Managers</Link>

        <MiniToDos />
        <ModalButtonLead />
        <ClientList path={'/customer/all'} />
      </>
    );
  } else {
    return <h1>Login as team lead or register</h1>;
  }
};
