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
        <Button onClick={openManagerModal} width="300px" fontSize={25} mb={15}>
          Add a new manager
        </Button>
        <Button onClick={openStatusModal} width="300px" fontSize={25} mb={15}>
          Add status
        </Button>
        <Modal isOpen={isManagerModalOpen} onClose={closeManagerModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={30}>Add a new manager</ModalHeader>
            <ModalBody>
              <Input 
              name='name' 
              value={inputs.name} 
              onChange={changeHandler} 
              placeholder="Enter name" 
              mb="4"
              fontSize={30}
              />
              <Input 
              name='login' 
              value={inputs.login} 
              onChange={changeHandler} 
              placeholder="Enter login" 
              mb="4" 
              fontSize={30}
              />
              <Input 
              name='password' 
              value={inputs.password} 
              onChange={changeHandler} 
              placeholder="Enter password" 
              mb="4" 
              fontSize={30}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={addManagerHandler} fontSize={25}>
                Save
              </Button>
              <Button colorScheme="orange" onClick={closeManagerModal} fontSize={25}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isStatusModalOpen} onClose={closeStatusModal}>
          <ModalOverlay />
          <ModalContent>
            {isCreateStatus ? (
              <>
                <Input 
                name='name' 
                value={inputStatus.name} 
                onChange={changeStatusHandler} 
                placeholder="Enter status"
                fontSize={25}
                mb="4"
                ml={12} 
                mt={5}
                w={350}
                />
                <Button colorScheme="green" ml={155} w={120} onClick={addStatusHandler} fontSize={25}>
                Create
                </Button>
              </>
            ) : (
              <ModalHeader>Add new status</ModalHeader>
            )}
              <ModalBody>
              {statuses?.length && statuses.map((status) => <Status key={status.id} status={status}/>)}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={openCreateStatus} fontSize={25}>
                New status
              </Button>
              <Button colorScheme="orange" onClick={closeStatusModal} fontSize={25}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <div className="btnGrp">
        <ChakraLink as={ReactRouterLink} to="/managers" fontSize={30}>
          View team
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/reports" fontSize={30}>
          View statistics
        </ChakraLink>
      </div>
    </>
  );
}
