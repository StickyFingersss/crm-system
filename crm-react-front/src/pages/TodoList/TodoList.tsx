import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchTodos } from '../../redux/thunkActions';

import ToDo from '../ToDo/ToDo';

import BtnScrollUp from '../../components/ScrollButton/ScrollButton';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';

export default function TodoList(): JSX.Element {
  const todos = useMySelector((store) => store.todoSlice.todos);
  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  const header = 'Your tasks';
  const createBtnTitle = 'Create new task';
  return (
    <div className="toDoListContainer">
      <a href="/">Back to main page</a>
      <h1>{header}</h1>
      <ModalButtonAddTodo createBtnTitle={createBtnTitle} />
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
      <BtnScrollUp />
    </div>
  );
}
