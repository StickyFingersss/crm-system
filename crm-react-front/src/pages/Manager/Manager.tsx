import React from 'react';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import { ClientList } from '../../components/ClientList/ClientList';
export const Manager = () => {
  return (
    <>
      <h1>Manager Page</h1>
      <h2>Anton Belkin</h2>
      <MiniToDos />
      <TaskCreator />
      <ClientList />
    </>
  );
};