import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@chakra-ui/react';

import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchTodos } from '../../redux/thunkActions';

import ToDo from '../ToDo/ToDo';

import BtnScrollUp from '../../components/ScrollButton/ScrollButton';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';
import DropDownFilterBtn from '../../components/DropDownFilterBtn/DropDownFilterBtn';

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
      <br />
      {/* <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select> */}
      <DropDownFilterBtn />
      <ul>
        {todos?.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
      <BtnScrollUp />
    </div>
  );
}
