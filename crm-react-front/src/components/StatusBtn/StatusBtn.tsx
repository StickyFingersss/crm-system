import React from 'react';

import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { TodoItemProps } from '../../types';

export default function StatusBtn({ todo }: TodoItemProps) {
  return (
    <>
      {todo.status && (
        <Button flex="1" variant="ghost" leftIcon={<CheckIcon />}>
          Done
        </Button>
      )}
      {!todo.status && (
        <Button flex="1" variant="ghost" leftIcon={<CloseIcon />}>
          Waiting
        </Button>
      )}
    </>
  );
}
