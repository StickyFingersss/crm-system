import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

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

import { Outlet } from 'react-router-dom';
import { useRef, ChangeEvent, useState, FormEvent } from 'react';
import { IDataLog, IDataReg } from './LayoutType';
import { useMyDispatch } from '../../redux/hooks';
import { fetchIsAutenticated } from '../../redux/thunkIsAutenticated';

const initStateLog: IDataLog = {
  name: '',
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

  const [dataLog, setDataLog] = useState(initStateLog);
  const [dataReg, setDataReg] = useState(initStateReg);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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
        }, 1500);
      } else {
        setDataLog(initStateLog);
        setSuccessMessage(false);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 1500);
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
        }, 1500);
      } else {
        setDataReg(initStateReg);
        setSuccessMessage(false);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 1500);
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
    <div className="wrapper">
      <div className="something">OIJOINININ</div>
      <Button onClick={openLogModal}>Login</Button>
      <Button onClick={openRegModal}>Register</Button>
      <Button type="button" onClick={logoutHandler}>
        Logout
      </Button>

      {/* Модалка логина */}
      <Modal
        finalFocusRef={finalRef}
        isOpen={isLogModalOpen}
        onClose={closeLogModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={submitHandlerLog}>
              <FormControl>
                <FormLabel>Введите имя</FormLabel>
                <Input
                  name="name"
                  onChange={inputHandlerLog}
                  value={dataLog.name}
                  type="text"
                  placeholder="Pro100_Dima228_1337"
                  margin="2"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Введите пароль</FormLabel>
                <Input
                  name="password"
                  onChange={inputHandlerLog}
                  value={dataLog.password}
                  type="password"
                  placeholder="qwerty"
                  margin="2"
                />
              </FormControl>
              <Button type="submit" colorScheme="yellow" margin="2">
                Войти
              </Button>
              <Box mt={4}>
                {successMessage && <Text color="green">Есть пробитие</Text>}
                {errorMessage && <Text color="red">Увы</Text>}
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
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={submitHandlerReg}>
              <FormControl>
                <FormLabel>Придумайте name</FormLabel>
                <Input
                  ref={initialRef}
                  onChange={inputHandlerReg}
                  value={dataReg.name}
                  name="name"
                  type="text"
                  placeholder="Billy"
                  margin="2"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Придумайте login</FormLabel>
                <Input
                  onChange={inputHandlerReg}
                  value={dataReg.login}
                  name="login"
                  type="text"
                  placeholder="BoyNextDoor"
                  margin="2"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Придумайте пароль</FormLabel>
                <Input
                  onChange={inputHandlerReg}
                  value={dataReg.password}
                  name="password"
                  type="password"
                  placeholder="qwerty"
                  margin="2"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Номер команды</FormLabel>
                <Input
                  onChange={inputHandlerReg}
                  value={dataReg.team_id}
                  name="team_id"
                  type="text"
                  placeholder="1"
                  margin="2"
                />
              </FormControl>

              <Button type="submit" colorScheme="yellow" margin="2">
                Зарегистрироваться
              </Button>
              <Box mt={4}>
                {successMessage && <Text color="green">Есть пробитие</Text>}
                {errorMessage && <Text color="red">Увы</Text>}
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
