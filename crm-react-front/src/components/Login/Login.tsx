import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

interface IReg {
  name: string;
  password: string;
}

const initState: IReg = {
  name: "",
  password: "",
};

export const Login = () => {

  const [dataLog, setDataLog] = useState(initState);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDataLog((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', dataLog);
      if (response.status === 200) {
        console.log('123');
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
      } else {
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <form onSubmit={submitHandler}>
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >          
          <FormControl>
            <Stack
              rounded={'xl'}
              p={{ base: 4, sm: 6, md: 6 }}
              spacing={{ base: 8 }}
              maxW={{ lg: 'lg' }}
            >
              <Stack spacing={4} />
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '3xl' }}
              >
                Login
              </Heading>
            </Stack>
            <FormLabel>Введите имя</FormLabel>
            <Input
              name="name"
              onChange={inputHandler}
              value={dataLog.name}
              type="text"
              placeholder="Pro100_Dima228_1337"
              margin="2"
            />
            <FormLabel>Введите пароль</FormLabel>
            <Input
              name="password"
              onChange={inputHandler}
              value={dataLog.password}
              type="password"
              placeholder="qwerty"
              margin="2"
            />
            <Button type="submit" colorScheme="yellow" margin="2">
              Войти
            </Button>
            <Box mt={4}>
              {showSuccessMessage && <Text>Авторизация прошла успешно!</Text>}
              {showErrorMessage && <Text>Такого пользователя нет!</Text>}
            </Box>
          </FormControl>
        </Container>
      </Box>
    </form>
  </>
  )
}
