import { useEffect, useState } from "react";
import { Flex, VStack, Box, Input, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Image } from "cloudinary-react";
function SecondPage() {
  const { publicId } = useParams();
  const [imageId, setImageId] = useState("");
  useEffect(() => {
    if (publicId) setImageId(publicId);
  }, []);
  return (
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
      >
        <Image cloudName="pasta" publicId={imageId} />
      </VStack>
    </Flex>
  );
}

export default SecondPage;
