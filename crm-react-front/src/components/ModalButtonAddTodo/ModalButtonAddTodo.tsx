import {
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

import moment from 'moment';

import { EditIcon } from '@chakra-ui/icons';
import { ChangeEvent, useEffect, useState } from 'react';

import React from 'react';
import { InputsType, TodoItemProps } from '../../types';
import { useMyDispatch } from '../../redux/hooks';
import { fetchAddTodo, fetchEdit } from '../../redux/thunkActions';

export default function ModalButtonAddTodo({ createBtnTitle, editBtnTitle, todo }: TodoItemProps) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const [inputs, setInputs] = useState<InputsType>({
    title: '',
    text: '',
    status: false,
    deadline: '',
  });

  useEffect(() => {
    if (todo) {
      setInputs({
        title: todo.title || '',
        text: todo.text || '',
        status: todo.status || false,
        deadline: moment(todo.deadline).format().slice(0, 16),
        user_id: todo.user_id || 0,
      });
    }
  }, [todo]);

  const dispatch = useMyDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const addHandler = async (): Promise<void> => {
    if (inputs.title && inputs.text && inputs.deadline) {
      void dispatch(fetchAddTodo(inputs));
      setInputs({
        ...inputs,
        title: '',
        text: '',
        deadline: '',
      });
    }
  };

  const editHandler = async (): Promise<void> => {
    if (inputs.title || inputs.text || inputs.deadline) {
      const newInputs = { ...inputs, id: todo.id };
      void dispatch(fetchEdit(newInputs));
      setInputs({
        ...inputs,
        title: '',
        text: '',
        deadline: '',
      });
    }
  };

  return (
    <>
      {!todo && (
        <>
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
            flex="1"
            variant="ghost"
            leftIcon={<EditIcon />}>
            {createBtnTitle}
            {editBtnTitle}
          </Button>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>
                <Input
                  name="title"
                  margin={5}
                  onChange={changeHandler}
                  value={inputs.title}
                  placeholder="Enter task title"
                  size="sm"
                />
              </ModalHeader>

              <ModalBody>
                {/* <Input
                  name="text"
                  type="text"
                  margin={5}
                  onChange={changeHandler}
                  value={inputs.text}
                  placeholder="Describe the task"
                  size="sm"
                /> */}
                <Textarea
                  name="text"
                  type="text"
                  value={inputs.text}
                  onChange={changeHandler}
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
                <Input
                  name="deadline"
                  type="datetime-local"
                  margin={5}
                  onChange={changeHandler}
                  value={inputs.deadline}
                  size="sm"
                />
                {/* <Text>Custom backdrop filters!</Text> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    addHandler();
                    onClose();
                  }}>
                  Save
                </Button>
                <Button onClick={() => (onClose(), setInputs)}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
      {todo && (
        <>
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
            flex="1"
            variant="ghost"
            leftIcon={<EditIcon />}>
            {createBtnTitle}
            {editBtnTitle}
          </Button>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>
                <Input
                  name="title"
                  margin={5}
                  onChange={changeHandler}
                  defaultValue={todo.title}
                  placeholder="Enter task title"
                  size="sm"
                />
              </ModalHeader>

              <ModalBody>
                <Input
                  name="text"
                  type="text"
                  margin={5}
                  onChange={changeHandler}
                  defaultValue={todo.text}
                  placeholder="Describe the task"
                  size="sm"
                />
                <Input
                  name="deadline"
                  type="datetime-local"
                  margin={5}
                  onChange={changeHandler}
                  defaultValue={inputs.deadline || ''}
                  size="sm"
                />
                {/* <Text>Custom backdrop filters!</Text> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    editHandler();
                    onClose();
                  }}>
                  Save changes
                </Button>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
