import { ChangeEvent, FormEvent, useState } from 'react';

import {
    Container,
    SimpleGrid,
    Stack,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Text,
} from '@chakra-ui/react';
import axios from 'axios';
axios.defaults.withCredentials = true;

interface IDataReg {
    name: string;
    login: string;
    password: string;
    team_id: number;
}

const initState: IDataReg = {
    name: '',
    login: '',
    password: '',
    team_id: 0,
};


export const Register = () => {

    const [dataReg, setDataReg] = useState(initState);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDataReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {

        const response = await axios.post('http://localhost:3000/user/register', dataReg);
        if (response.status === 200) {
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
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
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
                Register
              </Heading>
            </Stack>
            <FormLabel>Придумайте name</FormLabel>
            <Input
              name="name"
              type="text"
              onChange={inputHandler}
              value={dataReg.name}
              placeholder="Billy"
              margin="2"
            />
            <FormLabel>Придумайте login</FormLabel>
            <Input
              name="login"
              type="text"
              onChange={inputHandler}
              value={dataReg.login}
              placeholder="BoyNextDoor"
              margin="2"
            />
            <FormLabel>Придумайте пароль</FormLabel>
            <Input
              name="password"
              type="password"
              onChange={inputHandler}
              value={dataReg.password}
              placeholder="qwerty123"
              margin="2"
            />
            <FormLabel>Номер команды</FormLabel>
            <Input
              name="team_id"
              type="text"
              placeholder="1"
              margin="2"
            />
            <Button type="submit" colorScheme="yellow" margin="2">
              Зарегистрироваться
            </Button>
            <Box mt={4}>
                {showSuccessMessage && <Text color={'green.300'}>Есть пробитие</Text>}
                {showErrorMessage && <Text color='red'>УВЫ</Text>}
              </Box>
          </FormControl>
        </Container>
      </Box>
    </form>
  </>
  )
}
