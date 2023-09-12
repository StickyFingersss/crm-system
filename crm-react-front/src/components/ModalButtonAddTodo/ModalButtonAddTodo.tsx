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
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchAddTodo, fetchEdit } from '../../redux/thunkActions';

import DropDownChooseManager from '../DropDownChooseManager/DropDownChooseManager';

export default function ModalButtonAddTodo({
  createTaskForManagerBtnTitle,
  createBtnTitle,
  editBtnTitle,
  todo,
}: // user_id,
TodoItemProps) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log('USERID', user_id);

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
        leftIcon={<EditIcon />}
      >
        {createBtnTitle}
        {editBtnTitle}
        {createTaskForManagerBtnTitle}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          {session.isAdmin === true && (
            <DropDownChooseManager
              changeHandler={changeHandler}
              inputs={inputs}
              // user_id={user_id}
            />
          )}
          {!todo && (
            <>
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
              </ModalBody>

              <ModalFooter>
                <Button
                  onClick={() => {
                    addHandler();
                    onClose();
                  }}
                >
                  Save
                </Button>
                <Button onClick={() => (onClose(), setInputs)}>Close</Button>
              </ModalFooter>
            </>
          )}
          {todo && (
            <>
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
                  }}
                >
                  Save changes
                </Button>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
