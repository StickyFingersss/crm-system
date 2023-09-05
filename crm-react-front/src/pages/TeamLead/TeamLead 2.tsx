import React from 'react';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import ModalButtonLead from '../../components/ModalButtonLead/ModalButtonLead';
import { ClientList } from '../../components/ClientList/ClientList';

export const TeamLead = () => {
  return (
    <>
      <MiniToDos />
      <ModalButtonLead />
      <ClientList />
    </>
  );
};
