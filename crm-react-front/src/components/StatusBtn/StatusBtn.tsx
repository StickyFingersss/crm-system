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
            updateStatusHandler();
          }}
          flex="1"
          bg={'#5edb5e'}
          variant="ghost"
          fontSize={25}
          mb={3}
        >
          Done
        </Button>
      )}
      {!todo.status && (
        <Button
          onClick={() => {
            updateStatusHandler();
          }}
          flex="1"
          bg={'#d9d947'}
          variant="ghost"
          fontSize={25}
          mb={3}
        >
          Waiting
        </Button>
      )}
    </>
  );
}
