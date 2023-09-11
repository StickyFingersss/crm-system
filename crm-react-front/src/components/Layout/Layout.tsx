import axios from 'axios';
axios.defaults.withCredentials = true;

import styles from './Layout.module.css';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
} from '@chakra-ui/react';

import { useRef, ChangeEvent, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchIsAutenticated } from '../../redux/thunkIsAutenticated';

import { IDataLog, IDataReg } from './LayoutType';


const initStateLog: IDataLog = {
  login: '',
  password: '',
};

const initStateReg: IDataReg = {
  name: '',
  login: '',
  password: '',
  team_id: 0,
};

const Layout = (): JSX.Element => {
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  const [isLogModalOpen, setLogModalOpen] = useState(false);
  const [isRegModalOpen, setRegModalOpen] = useState(false);
  
  const [dataLog, setDataLog] = useState(initStateLog);
  const [dataReg, setDataReg] = useState(initStateReg);

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);


  const openLogModal = () => {
    setLogModalOpen(true);
  };

  const closeLogModal = () => {
    setLogModalOpen(false);
  };

  const openRegModal = () => {
    setRegModalOpen(true);
  };

  const closeRegModal = () => {
    setRegModalOpen(false);
  };

  const inputHandlerLog = (e: ChangeEvent<HTMLInputElement>) => {
    setDataLog((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const inputHandlerReg = (e: ChangeEvent<HTMLInputElement>) => {
    setDataReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const submitHandlerLog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/login',
        dataLog
      );
      if (response.data.message) {
        setSuccessMessage(true);
        dispatch(fetchIsAutenticated());
        setTimeout(() => {
          setDataLog(initStateLog);
          closeLogModal();
          setSuccessMessage(false);
        }, 700);
      } else {
        setDataLog(initStateLog);
        setSuccessMessage(false);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 700);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandlerReg = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/register',
        dataReg
      );
      if (response.data.message) {
        setSuccessMessage(true);
        dispatch(fetchIsAutenticated());
        setTimeout(() => {
          setDataReg(initStateReg);
          closeRegModal();
          setSuccessMessage(false);
        }, 700);
      } else {
        setDataReg(initStateReg);
        setSuccessMessage(false);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 700);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = async () => {
    try {
      const response = await axios('http://localhost:3000/api/user/logout');
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <div className={styles.wrapper}>
      <Button onClick={openLogModal} className={styles.btnLog}>Sign in</Button>
      <Button onClick={openRegModal} className={styles.btnReg}>Sign up</Button>
      <Button type="button" onClick={logoutHandler} className={styles.btnLogout}>
        Logout
      </Button>

      {/* Модалка логина */}
      <Modal
        finalFocusRef={finalRef}
        isOpen={isLogModalOpen}
        onClose={closeLogModal}
      >
        <ModalOverlay 
          backdropFilter='auto'
          backdropInvert='80%'/>
        <ModalContent background='#bebebe' className={styles.modal}>
          <ModalHeader fontSize='4xl'>Sign in</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={submitHandlerLog}>
              <FormControl>
                <FormLabel fontSize='3xl'>Login</FormLabel>
                <Input
                  name="login"
                  onChange={inputHandlerLog}
                  value={dataLog.login}
                  type="text"
                  placeholder="Pro100_Dima_1337"
                  margin="2"
                  fontSize='2xl'
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel fontSize='3xl'>Password</FormLabel>
                <Input
                  name="password"
                  onChange={inputHandlerLog}
                  value={dataLog.password}
                  type="password"
                  placeholder="qwerty"
                  margin="2"
                  fontSize='2xl'
                />
              </FormControl>
              <Button 
              type="submit" 
              colorScheme="green" 
              margin="2" 
              fontSize='2xl'
              color='black'>
                Sign in
              </Button>
              <Box mt={4}>
                {successMessage && <Text color="green" fontSize='4xl'>Success!</Text>}
                {errorMessage && <Text color="red" fontSize='4xl'>Incorrect data entered!</Text>}
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Модалка регистрации */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isRegModalOpen}
        onClose={closeRegModal}
      >
        <ModalOverlay           
          backdropFilter='auto'
          backdropInvert='80%'
        />
        <ModalContent background='#bebebe' className={styles.modal}>
          <ModalHeader fontSize='4xl'>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={submitHandlerReg}>
              <FormControl>
                <FormLabel fontSize='3xl'>Name</FormLabel>
                <Input
                  ref={initialRef}
                  onChange={inputHandlerReg}
                  value={dataReg.name}
                  name="name"
                  type="text"
                  placeholder="Billy"
                  margin="2"
                  fontSize='2xl'
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize='3xl'>Login</FormLabel>
                <Input
                  onChange={inputHandlerReg}
                  value={dataReg.login}
                  name="login"
                  type="text"
                  placeholder="BoyNextDoor"
                  margin="2"
                  fontSize='2xl'
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel fontSize='3xl'>Password</FormLabel>
                <Input
                  onChange={inputHandlerReg}
                  value={dataReg.password}
                  name="password"
                  type="password"
                  placeholder="qwerty"
                  margin="2"
                  fontSize='2xl'
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel fontSize='3xl'>Team</FormLabel>
                <Input
                  onChange={inputHandlerReg}
                  value={dataReg.team_id}
                  name="team_id"
                  type="text"
                  placeholder="1"
                  margin="2"
                  fontSize='2xl'
                />
              </FormControl>

              <Button 
              type="submit" 
              colorScheme="green" 
              margin="2"
              fontSize='2xl'
              color='black'
              >
                Sign up
              </Button>
              <Box mt={4}>
              {successMessage && <Text color="green" fontSize='4xl'>Success!</Text>}
                {errorMessage && <Text color="red" fontSize='4xl'>Incorrect data entered!</Text>}
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Outlet />
    </div>
  );
};

export default Layout;
