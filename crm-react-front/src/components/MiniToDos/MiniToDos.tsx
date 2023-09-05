

import { Box, Checkbox, Text } from '@chakra-ui/react';

import './MiniToDos.css'


export default function MiniToDos() {
  

  return (
    <div className='miniToDos'>
      <Box
        p="10px"
        borderWidth='1px'
        borderRadius='10px'
        borderColor='black.10'
        width="300px"
        height="240px"
        bgColor="white"
      >
        <Text 
          fontWeight="bold" 
          mb="2"
          borderWidth='1px'
          borderRadius='10px'
          fontSize="4xl"
        >
          Tasks
        </Text>
        <ul>
          <li>
            <p>Time</p>
            <p>Task 1</p>
            <Checkbox />
          </li>
          <li>
            <p>Time</p>
            <p>Task 2</p>
            <Checkbox />
          </li>
          <li>
            <p>Time</p>
            <p>Task 3</p>
            <Checkbox />
          </li>
        </ul>
      </Box>
  </div>
  )
}
