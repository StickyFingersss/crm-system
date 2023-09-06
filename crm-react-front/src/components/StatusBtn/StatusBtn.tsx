import React from 'react';

import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { TodoItemProps } from '../../types';
import { useMyDispatch } from '../../redux/hooks';
import { fetchNewStatus } from '../../redux/thunkActions';

export default function StatusBtn({ todo }: TodoItemProps) {
  const dispatch = useMyDispatch();

  const updateStatusHandler = async (): Promise<void> => {
        const todoUpdated = { ...todo, status: !todo.status };
    dispatch(fetchNewStatus(todoUpdated));
  };

  return (
    <>
      {todo.status && (
        <Button
          onClick={() => {
            updateStatusHandler(), console.log('Hello');
          }}
          flex="1"
          variant="ghost"
          leftIcon={<CheckIcon />}
        >
          Done
        </Button>
      )}
      {!todo.status && (
        <Button
          onClick={() => {
            updateStatusHandler(), console.log('Hello');
          }}
          flex="1"
          variant="ghost"
          leftIcon={<CloseIcon />}
        >
          Waiting
        </Button>
      )}
    </>
  );
}
