import React from 'react';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import { ClientList } from '../../components/ClientList/ClientList';

import { useMySelector } from '../../redux/hooks';

export const Manager = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  if (session.login) {
    return (
      <>
        <h1>Manager Page</h1>
        <h2>Anton Belkin</h2>
        <MiniToDos />
        <TaskCreator />
        <ClientList />
      </>
    );
  } else {
    return (
      <div>
        <h1>Login or register</h1>
      </div>
    );
  }
};
