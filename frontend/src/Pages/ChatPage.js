import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import { Box, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import Mychats from '../components/Mychats';
import ChatBox from '../components/ChatBox';


const ChatPage = () => {
    const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  console.log(fetchAgain);
  console.log(user);
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <Mychats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
    </div>
  //return <h1>This is the chat page</h1>
  );
}

export default ChatPage