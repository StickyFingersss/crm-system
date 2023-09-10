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
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  const todos = useMySelector((store) => store.todoSlice.todos);
  const dispatch = useMyDispatch();

  const [selectedManager, setSelectedManager] = useState<number | null>(null);

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
      <DropDownFilterBtn
        selectedManager={selectedManager}
        setSelectedManager={setSelectedManager}
      />
      <ul>
        {todos
          ?.filter(
            (todo) =>
              (!selectedManager && todo.user_id === session.userId) ||
              todo.user_id === Number(selectedManager)
          )
          .map((todo) => (
            <ToDo key={todo.id} todo={todo} />
          ))}
      </ul>
      <BtnScrollUp />
    </div>
  );
}
