import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import '../App.css';

const HomePage = () => {
  const history = useHistory();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if(user) history.push("/chats");

  },[history]);
  return (
    <Container className='Homepage' maxW="xl" centerContent>
      <Box
       d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
        <Text d="flex" justifyContent="center" fontSize="4xl" fontFamily="Work sans">Talk-a-tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRight="lg" color="black"borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: 'blue.500' }} width="50%">Login</Tab>
            <Tab _selected={{ color: 'white', bg: 'green.400' }} width="50%">Sign UP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage