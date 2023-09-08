import React from 'react';
import { useEffect } from 'react';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import ModalButtonLead from '../../components/ModalButtonLead/ModalButtonLead';
import { ClientList } from '../../components/ClientList/ClientList';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchIsAutenticated } from '../../redux/thunkIsAutenticated';

export const TeamLead = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchIsAutenticated());
  }, [dispatch]);

  return (
    <>
      <button>
        <a href="/todos">Todos</a>
      </button>
      <button>
        <a href="/managers">Managers</a>
      </button>

      <MiniToDos />
      <ModalButtonLead />
      <ClientList />
    </>
  );
};
