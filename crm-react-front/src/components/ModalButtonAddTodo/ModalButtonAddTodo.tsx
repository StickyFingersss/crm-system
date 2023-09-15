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

import './ModalButtonAddTodo.css';

import moment from 'moment';

import { EditIcon } from '@chakra-ui/icons';
import { ChangeEvent, useEffect, useState } from 'react';

import React from 'react';
import { InputsType, TodoItemProps } from '../../types';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchAddTodo, fetchEdit } from '../../redux/thunkActions';

import DropDownChooseManager from '../DropDownChooseManager/DropDownChooseManager';

export default function ModalButtonAddTodo({
  createTaskForManagerBtnTitle,
  createBtnTitle,
  editBtnTitle,
  selectedManager,
  todo,
}: TodoItemProps) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputs, setInputs] = useState<InputsType>({
    title: '',
    text: '',
    status: false,
    deadline: '',
    user_id: 0,
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
        user_id: 0,
      });
    }
  };

  const editHandler = async (): Promise<void> => {
    if (inputs.user_id || inputs.title || inputs.text || inputs.deadline) {
      const newInputs = { ...inputs, id: todo.id };
      void dispatch(fetchEdit(newInputs));
      setInputs({
        ...inputs,
        title: '',
        text: '',
        deadline: '',
        user_id: 0,
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        flex="1"
        variant="ghost"
        fontSize='25'
        bg='#b5b5b5'
        mb={3}
      >
        {createBtnTitle}
        {editBtnTitle}
        {createTaskForManagerBtnTitle}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'6xl'}>
        {overlay}
        <ModalContent p={5} >
          {session.isAdmin === true && (
            <DropDownChooseManager
              changeHandler={changeHandler}
              inputs={inputs}
              selectedManager={selectedManager}
            />
          )}
          {!todo && (
            <>
              <ModalHeader>
                <Input
                  name="title"
                  onChange={changeHandler}
                  value={inputs.title}
                  placeholder="Enter task title"
                  fontSize={40} 
                />
              </ModalHeader>

              <ModalBody>
                <Textarea
                  name="text"
                  type="text"
                  value={inputs.text}
                  onChange={changeHandler}
                  placeholder="Here is a sample placeholder"
                  mb={10}
                  fontSize={40}
                />
                <Input
                  name="deadline"
                  type="datetime-local"
                  onChange={changeHandler}
                  value={inputs.deadline}
                  fontSize={40}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={() => {
                    addHandler();
                    onClose();
                  }}
                  colorScheme='green'
                >
                  Save
                </Button>
                <Button
                  onClick={() => (
                    onClose(),
                    setInputs({
                      ...inputs,
                      title: '',
                      text: '',
                      deadline: '',
                      user_id: 0,
                    })
                  )}
                  colorScheme='orange'
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
          {todo && (
            <>
              <ModalHeader>
                <Input
                  name="title"
                  onChange={changeHandler}
                  defaultValue={todo.title}
                  placeholder="Enter task title"
                  fontSize={30}
                />
              </ModalHeader>

              <ModalBody>
                <Input
                  name="text"
                  type="text"
                  onChange={changeHandler}
                  defaultValue={todo.text}
                  placeholder="Describe the task"
                  fontSize={30}
                  mb={5}
                />
                <Input
                  name="deadline"
                  type="datetime-local"
                  onChange={changeHandler}
                  defaultValue={inputs.deadline || ''}
                  fontSize={30}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    editHandler();
                    onClose();
                  }}
                  fontSize={20}
                  mr={3}
                  colorScheme='green'
                >
                  Save changes
                </Button>
                <Button onClick={onClose} colorScheme='orange'>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
