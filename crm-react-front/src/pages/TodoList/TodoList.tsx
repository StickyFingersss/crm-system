import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import ToDo from '../ToDo/ToDo';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchTodos } from '../../redux/thunkActions';

export default function TodoList(): JSX.Element {
  const todos = useMySelector((store) => store.todoSlice.todos);
  console.log("🚀 ~ file: TodoList.tsx:11 ~ TodoList ~ todos:", todos);

  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  const header = 'Your tasks';
  return (
    <div className="toDoListContainer">
      <a href="/">Back to main page</a>
      <h1>{header}</h1>
      <ul>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
