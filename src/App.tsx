import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack
      textAlign="center"
      w="30%"
      h="50vh"
      position="absolute"
      transform="translate(-50%, -50%)"
      top="50%"
      left="50%"
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      py="2rem"
    >
      <Text fontSize="18px">Upload your image</Text>
      <Text color="rgba(130, 130, 130, 1)" fontSize="10px">
        File should be Jpg, Png, ...
      </Text>
      <VStack
        w="60%"
        h="50%"
        justify="space-around"
        m="0 auto"
        bg="#F6F8FB"
        border="1px dashed #97BEF4"
        p="2rem 4rem"
        borderRadius="12px"
      >
        <Image src="https://via.placeholder.com/250x150" />
        <Text fontSize="12px" color="rgba(130, 130, 130, 1)">
          Drag & Drop your image here
        </Text>
      </VStack>
      <Text fontSize="12px" color="rgba(130, 130, 130, 1)">
        Or
      </Text>
      <Box w="100px" m="0 auto">
        <Button
          p="8px"
          bg="#2F80ED"
          borderRadius="8px"
          fontWeight="500"
          fontSize="12px"
          w="100%"
          fontFamily="Noto Sans"
          color="white"
        >
          Choose a file
        </Button>
      </Box>
    </VStack>
  );
}

export default App;
