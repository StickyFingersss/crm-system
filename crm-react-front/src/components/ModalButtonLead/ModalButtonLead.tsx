import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';


import { useMyDispatch } from '../../redux/hooks';
import { fetchAddOneManager } from '../../redux/thunkActions';

import { Link as ReactRouterLink } from 'react-router-dom';
import { InputManagerType } from '../../types';

export default function ModalButtonLead() {
  const [isManagerModalOpen, setManagerModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [isCreateStatus, setCreateStatus] = useState(false);
  const [inputs, setInputs] = useState<InputManagerType>({ name: '', login: '', password: '' });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useMyDispatch();

  const addManagerHandler = async (): Promise<void> => {
    if (inputs.name && inputs.login && inputs.password) {
      void dispatch(fetchAddOneManager(inputs));
      setInputs({ name: '', login: '', password: '' });
    }
  };

  const openManagerModal = () => {
    setManagerModalOpen(true);
  };

  const closeManagerModal = () => {
    setManagerModalOpen(false);
  };

  const openStatusModal = () => {
    setStatusModalOpen(true);
  };

  const closeStatusModal = () => {
    setStatusModalOpen(false);
  };

  const openCreateStatus = () => {
    setCreateStatus(true);
  };

  const closeCreateStatus = () => {
    setCreateStatus(false);
  };

  return (
    <>
      <div className="btnGrp">
        <Button onClick={openManagerModal} width="300px">
          Добавить нового менеджера
        </Button>
        <Button onClick={openStatusModal} width="300px">
          Добавить статус
        </Button>
        <Modal isOpen={isManagerModalOpen} onClose={closeManagerModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Добавить нового менеджера</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input name='name' value={inputs.name} onChange={changeHandler} placeholder="Введите имя" mb="4" />
              <Input name='login' value={inputs.login} onChange={changeHandler} placeholder="Введите логин" mb="4" />
              <Input name='password' value={inputs.password} onChange={changeHandler} placeholder="Введите пароль" mb="4" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={addManagerHandler}>
                Сохранить
              </Button>
              <Button variant="ghost" onClick={closeManagerModal}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isStatusModalOpen} onClose={closeStatusModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Добавить новый статус</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* {statuses.map((status, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <p style={{ marginRight: '8px' }}>{status}</p>
                <Button size="sm" colorScheme="red" onClick={() => deleteStatus(index)}>Удалить</Button>
              </div>
            ))} */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={openCreateStatus}>
                Новый статус
              </Button>
              <Button variant="ghost" onClick={closeStatusModal}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <div className="btnGrp">
        <ChakraLink as={ReactRouterLink} to="/managers">
          Просмотреть команду
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/reports">
          Посмотреть статистику
        </ChakraLink>
      </div>
    </>
  );
}
