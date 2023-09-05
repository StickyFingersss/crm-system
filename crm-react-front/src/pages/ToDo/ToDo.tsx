import React from 'react';
import './Todo.css';
import type { TodoItemProps } from '../../types';

import {
  // BsThreeDotsVertical,
  EditIcon,
  DeleteIcon,
} from '@chakra-ui/icons';

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

export default function ToDo({ todo }: TodoItemProps): JSX.Element {
  console.log('TODO', todo);
  
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
            <Button flex="1" variant="ghost" leftIcon={<EditIcon />}>
              Edit
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
