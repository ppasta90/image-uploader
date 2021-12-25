import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  Box,
  Image,
  Text,
  Input,
  VStack,
  Progress,
  Flex,
} from "@chakra-ui/react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  //const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    console.log("selectedFile :", selectedFile);
  }, [selectedFile]);

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      alert("file not valid");
      return false;
    } else if (file.size > 2000000) {
      alert("file too big");
      return false;
    }
    return true;
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      validateFile(file);
      setSelectedFile(file);
    }
  };

  const inputRef = useRef();
  const inputClicked = () => {
    inputRef?.current?.click();
    if (inputRef?.current?.files) {
      setSelectedFile(inputRef?.current?.files[0]);
    }
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (validateFile(file)) setSelectedFile(file);
    setIsLoading("loading");
  };
  return (
    <>
      {isLoading === "loading" ? (
        <Box w="25%">
          <Progress hasStripe isIndeterminate isAnimated />
        </Box>
      ) : (
        <Flex
          direction="column"
          textAlign="center"
          justify="space-around"
          minW="30%"
          w={["100%", "70%", "50%", "40%"]}
          margin="0 auto"
          h={["100vh", "50vh"]}
          borderRadius="12px"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
          py="2rem"
        >
          <Text fontSize="18px">Upload your image</Text>
          <Text color="rgba(130, 130, 130, 1)" fontSize="10px">
            File should be Jpg, Png, ...
          </Text>
          <VStack
            w={["70%", "70%", "50%", "50%", "40%  "]}
            h={["50%", "50%"]}
            justify="space-around"
            m="0 auto"
            bg="#F6F8FB"
            border="1px dashed #97BEF4"
            p="2rem 4rem"
            borderRadius="12px"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
          >
            <Image src="https://via.placeholder.com/" />
            <Text fontSize="12px" color="rgba(130, 130, 130, 1)">
              Drag & Drop your image here
            </Text>
          </VStack>
          <Text fontSize="12px" color="rgba(130, 130, 130, 1)">
            Or
          </Text>
          <Box
            w={["80px", "160px", "200px", "240px"]}
            m="0 auto"
            p="18px"
            bg="#2F80ED"
            borderRadius="8px"
            fontWeight="500"
            fontSize="12px"
            fontFamily="Noto Sans"
            color="white"
            onClick={inputClicked}
            cursor="pointer"
          >
            Choose a file
            <Input
              display="none"
              ref={inputRef}
              type="file"
              onChange={handleUploadFile}
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
export default App;
