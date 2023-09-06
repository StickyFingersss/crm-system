import React from 'react';
import './Todo.css';
import type { TodoItemProps } from '../../types';
import { useMyDispatch } from '../../redux/hooks';
import { fetchDel } from '../../redux/thunkActions';

import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Stack,
  Text,
  Flex,
  Avatar,
  Box,
} from '@chakra-ui/react';

import StatusBtn from '../../components/StatusBtn/StatusBtn';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';

export default function ToDo({ todo }: TodoItemProps): JSX.Element {
  const dispatch = useMyDispatch();

  const deleteHandler = async (): Promise<void> => {
    void dispatch(fetchDel(todo.id));
  };


  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
  };
  const date = new Date(todo.deadline).toLocaleString('ru-RU', options);

  const editBtnTitle = 'Edit';

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        className="taskCard"
      >
        <Stack className="stack">
          <CardBody className="cardBody">
            <Heading className="headerText" size="sm">
              {todo.title}
            </Heading>

            <Text className="text" py="2">
              {todo.text}
            </Text>
            <span>To do before: {date}</span>
          </CardBody>

          <CardFooter
            className="footer"
            marginTop="0"
            justify="space-between"
            flexWrap="wrap"
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
            <StatusBtn todo={todo} />
            {/* <Button  flex="1" variant="ghost" leftIcon={<EditIcon />}>
              Edit
            </Button> */}
            <ModalButtonAddTodo editBtnTitle={editBtnTitle} todo={todo}/>
            <Button
              onClick={deleteHandler}
              flex="1"
              variant="ghost"
              leftIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
