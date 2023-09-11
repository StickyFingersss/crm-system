import React from 'react';
import {
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

import { EditIcon } from '@chakra-ui/icons';
import DropDownFilterBtn from '../../DropDownFilterBtn/DropDownFilterBtn';

export default function ModalAddTodoForAdmin({
  inputs,
  addHandler,
  editHandler,
  changeHandler,
  todo,
  createBtnTitle,
  editBtnTitle,
  isOpen,
  onOpen,
  onClose,
  overlay,
  setOverlay,
  setInputs,
  selectedManager,
  setSelectedManager,
}) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
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
            leftIcon={<EditIcon />}
          >
            {createBtnTitle}
            {editBtnTitle}
          </Button>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>
                <DropDownFilterBtn
                  selectedManager={selectedManager}
                  setSelectedManager={setSelectedManager}
                />
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
                {/* <Text>Custom backdrop filters!</Text> */}
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
            leftIcon={<EditIcon />}
          >
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
                  }}
                >
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
