import { Box, Checkbox, Text, Link as ChakraLink } from '@chakra-ui/react';

import './MiniToDos.css';

import { Link as ReactRouterLink } from 'react-router-dom';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import { fetchTodos } from '../../redux/thunkActions';
import { TodosType } from '../../types';
import ToDo from '../../pages/ToDo/ToDo';

export default function MiniToDos() {
  const todos = useMySelector((store) => store.todoSlice.todos);
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  const dispatch = useMyDispatch();
  
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);
  
  useEffect(() => {
    if (todos?.length) {
      const todosWithDateObj = todos.map((todo) => {
        return { ...todo, deadline: new Date(todo.deadline) };
      });
      const filteredTodos = todosWithDateObj
        .filter(
          (todo) =>
            todo.deadline &&
            todo.status === false &&
            todo.user_id === session.userId
        )
        .sort((a, b) => a.deadline - b.deadline);

      const topTodos = filteredTodos.slice(0, 3);
      setFilteredTodos(topTodos);
    }
  }, [todos]);

  return (
    <>
      <div className="miniToDos" style={{ width: '500px' }}>
        <Box
          p="10px"
          borderWidth="1px"
          borderRadius="10px"
          borderColor="black.10"
          width="300px"
          height="240px"
          bgColor="white"
        >
          <Text
            fontWeight="bold"
            mb="2"
            borderWidth="1px"
            borderRadius="10px"
            fontSize="4xl"
          >
            <ChakraLink as={ReactRouterLink} to="/todos">
              Tasks
            </ChakraLink>
          </Text>
          <div>
            <ul>
              {filteredTodos.map((todo) => (
                <ToDo key={todo.id} todo={todo} />
              ))}
            </ul>
          </div>
        </Box>
      </div>
    </>
  );
}
