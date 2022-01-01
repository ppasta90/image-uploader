import React, { DragEventHandler, useEffect, useRef, useState } from "react";
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
import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState<File>();
  //const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState<"idle" | "loading" | "completed">(
    "idle"
  );

  useEffect(() => {
    console.log("selectedFile :", selectedFile);
  }, [selectedFile]);

  const dragOver = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const dragEnter = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const dragLeave = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const validateFile = (file: File) => {
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
  /* UPLOAD BY DRAG AND DROP */
  const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    if (file) {
      validateFile(file);
      setSelectedFile(file);
      uploadImage(file);
    }
  };
  /* UPLOAD BY CLICKING BUTTON */
  const handleUploadFile = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    if (validateFile(file)) setSelectedFile(file);
    uploadImage(file);
  };
  /* UPLOADING TO CLOUDINARY */
  const uploadImage = (file: File) => {
    setIsLoading("loading");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "imageUpload");
    axios
      .post("https://api.cloudinary.com/v1_1/pasta/image/upload", formData)
      .then(() => setIsLoading("completed"))
      .catch((err) => alert(err));
  };
  /* MANAGING CLICK ON BUTTON */
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClicked = () => {
    inputRef?.current?.click();
    if (inputRef?.current?.files) {
      setSelectedFile(inputRef?.current?.files[0]);
    }
  };

  return (
    <>
      {isLoading === "loading" && (
        <Box w="25%">
          <Progress hasStripe isIndeterminate isAnimated />
        </Box>
      )}
      {isLoading === "idle" && (
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
            <Image
              src="https://via.placeholder.com/150x150"
              objectFit="contain"
            />
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
