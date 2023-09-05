import { useState } from 'react';

import './App.css';

import { Routes, Route } from 'react-router-dom';
import ToDo from './pages/ToDo/ToDo';
import TodoList from './pages/TodoList/TodoList';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route index element={<a href="/todos">All todos</a>} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todo/:id" element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;
