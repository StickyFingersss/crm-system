import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/">Back to main page</Link>
      <Link to="/lead">To TeamLead page</Link>

      <h1>{header}</h1>

      <ModalButtonAddTodo createBtnTitle={createBtnTitle} />
      <ul>
        {todos?.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
      <BtnScrollUp />
    </div>
  );
}
