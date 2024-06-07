import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import { Box, Button, Flex, Stack, Text, useToast } from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";
import axios from 'axios';
import { ChatLoading } from './ChatLoading';
import { getSender } from '../config/ChatLogics';
import GroupChatModal from './miscellaneous/GroupChatModal';



const Mychats = ({ fetchAgain }) => {

  const [loggedUser , setLoggedUser] = useState();
  const {user ,selectedChat, setSelectedChat , chats , setChats  } = ChatState();

  const toast = useToast();

  const fetchChats = async ()=>{
    try {

      const config = {
            headers:{
                Authorization: `Bearer ${user.token}`,
            },
          };
 
          const {data} = await axios.get("http://localhost:5000/api/chat", config);
          setChats(data);

    } catch(error){

      toast({
            title: "Error Occured!",
            description: "Failed to load the chats",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-left",
        });
    }

  }

  useEffect(()=>{
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  },[fetchAgain]);

  return (
     <Flex
     d={{base: selectedChat ? "none" : "flex", md: "flex"}}
     flexDir="column"
     alignItems="center"
     p={3}
     bg="white"
     w={{base: "100%", md: "31%" }}
     borderRadius="lg"
     borderWidth="1px"
     >
        <Flex
        pb={3}
        px={3}
        fontSize={{base:"28px", md:"30"}}
        fontFamily="work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        >
            My Chats
            <GroupChatModal>

            <Button
            d="flex"
            fontSize={{base:"17px" , md:"10px" , lg: "17px"}}
            rightIcon ={<AddIcon/>}
            >
              New Group Chat
            </Button>
            </GroupChatModal>
      </Flex>

      <Flex
      d="flex"
      flexDir='column'
      p={3}
      bg = "#F8F8F8"
      w= "100%"
      h= "100%"
      borderRadius="lg"
      overflow="hidden"
      >
        {chats ? (
          <Stack overflowY='scroll'>
            {chats?.map((chat)=>{
                return <Flex
                onClick={()=> setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
                >
                  <Text>{!chat.isGroupChat? (
                    getSender(loggedUser, chat.users)
                  ) : chat.chatName}</Text>
                </Flex>
            })}
          </Stack>

        ) : (
          <ChatLoading/>
        )}
      </Flex>
     </Flex>
  )
}

export default Mychats