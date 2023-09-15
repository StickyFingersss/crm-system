import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text, 
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import './Todo.css';

import React from 'react';
import type { TodoItemProps } from '../../types';
import { useMyDispatch } from '../../redux/hooks';
import { fetchDel } from '../../redux/thunkActions';

import StatusBtn from '../../components/StatusBtn/StatusBtn';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';

export default function ToDo({ todo }: TodoItemProps): JSX.Element {
  
  const dispatch = useMyDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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
  // console.log('TODO-IN-TODO', todo);

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        className="taskCard"
      >
        <Stack className="stack" gap='16rem'>
          <CardBody className="cardBody" ml={25}>
            <Heading className="headerText" w={310} fontSize="3xl">
              {todo.title}
            </Heading>

            <Text className="text" py="2" fontSize="3xl">
              {todo.text}
            </Text>
            <span className='spanDate'>To do before: {date}</span>
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
            <ModalButtonAddTodo editBtnTitle={editBtnTitle} todo={todo} />
            <Button
              flex="1"
              variant="ghost"
              bg={'#ff5959'}
              onClick={onOpen}
              fontSize={25}
            >
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Task
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} colorScheme='green' bg={'green'} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="orange" onClick={deleteHandler} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
