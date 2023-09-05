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
import { useState } from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';

export default function ModalButtonLead() {
  const [isManagerModalOpen, setManagerModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [isCreateStatusModalOpen, setCreateStatusModalOpen] = useState(false);
  // const [managers, setManagers] = useState([]);
  // const [statuses, setStatuses] = useState([]);

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

  const openCreateStatusModal = () => {
    setCreateStatusModalOpen(true);
  };

  const closeCreateStatusModal = () => {
    setCreateStatusModalOpen(false);
  };

  // const addManager = () => {
  //   // Добавить логику для сохранения нового менеджера
  //   setManagers([...managers, { name: '', email: '', password: '' }]);
  // };

  // const addStatus = () => {
  //   // Добавить логику для сохранения нового статуса
  //   setStatuses([...statuses, 'Новый статус']);
  // };

  // const deleteStatus = (index) => {
  //   // Добавить логику для удаления статуса по индексу
  //   const updatedStatuses = [...statuses];
  //   updatedStatuses.splice(index, 1);
  //   setStatuses(updatedStatuses);
  // }
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
              <Input placeholder="Введите имя" mb="4" />
              <Input placeholder="Введите почту" mb="4" />
              <Input placeholder="Введите пароль" mb="4" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeManagerModal}>
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
              <Button colorScheme="blue" mr={3} onClick={openCreateStatusModal}>
                Новый статус
              </Button>
              <Button variant="ghost" onClick={closeStatusModal}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={isCreateStatusModalOpen} onClose={closeCreateStatusModal}>
          <ModalBody>
            <Input placeholder="Введите новый статус" mb="4" />
            <Button colorScheme="blue" mr={3} onClick={closeCreateStatusModal}>
              Создать статус
            </Button>
            <Button variant="ghost" onClick={closeCreateStatusModal}>
              Закрыть
            </Button>
          </ModalBody>
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
