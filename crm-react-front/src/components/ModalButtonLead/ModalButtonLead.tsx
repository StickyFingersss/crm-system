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
import { ChangeEvent, useEffect, useState } from 'react';

import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchAddOneManager } from '../../redux/thunkActions';

import { Link as ReactRouterLink } from 'react-router-dom';
import { InputManagerType, InputStatusType } from '../../types';
import { fetchAllStatuses, fetchAddStatus } from '../../redux/thunkActions/statusesActions';
import Status from '../Status/Status';

export default function ModalButtonLead() {
  const [isManagerModalOpen, setManagerModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [isCreateStatus, setCreateStatus] = useState(false);
  const [inputs, setInputs] = useState<InputManagerType>({ name: '', login: '', password: '' });
  const [inputStatus, setInputStatus] = useState<InputStatusType>({ name: '' })

  const statuses = useMySelector((store) => store.statusSlice.statuses);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputStatus((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchAllStatuses());
  }, [dispatch]);

  const addManagerHandler = async (): Promise<void> => {
    if (inputs.name && inputs.login && inputs.password) {
      void dispatch(fetchAddOneManager(inputs));
      setInputs({ name: '', login: '', password: '' });
    }
  };

  const addStatusHandler = async (): Promise<void> => {
    if (inputStatus.name) {
      void dispatch(fetchAddStatus(inputStatus));
      setInputStatus({ name: '' });
      setCreateStatus(false);
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
  console.log("MODAL!!!!!!!!!!!!!!!!!!!!!!!!!!");
  
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
            {isCreateStatus ? (
              <>
                <Input name='name' value={inputStatus.name} onChange={changeStatusHandler} placeholder="Введите статус" mb="4" />
                <Button colorScheme="blue" mr={3} onClick={addStatusHandler}>
                  Сохранить
                </Button>
              </>
            ) : (
              <ModalHeader>Добавить новый статус</ModalHeader>
            )}
            <ModalCloseButton />
            <ModalBody>
              {statuses?.length && statuses.map((status) => <Status key={status.id} status={status}/>)}
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
