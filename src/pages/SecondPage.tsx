import { useEffect, useRef, useState } from "react";
import { Flex, Text, Box, Button, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

// @ts-ignore
import { Image, Transformation } from "cloudinary-react";
function SecondPage() {
  const { publicId } = useParams();
  const [imageId, setImageId] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState<string | null>("");
  const linkRef = useRef<HTMLDivElement>(null);

  function handleCopyLink() {
    linkRef?.current?.firstChild &&
      setCopiedLink(linkRef?.current?.firstChild.textContent);
    alert("copied");
  }
  useEffect(() => {
    navigator.clipboard.writeText(copiedLink || "");
  }, [copiedLink]);

  useEffect(() => {
    if (publicId) setImageId(publicId);
  }, []);

  return (
    <Flex
      direction="column"
      textAlign="center"
      justify="space-around"
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      p="2rem 4rem"
      height={"70vh"}
      background="white"
    >
      <VStack
        justifyContent="space-between"
        /* border="1px solid red" */
        height={"20%"}
      >
        <BsFillCheckCircleFill size={"4rem"} color="#219653" />
        <Text fontSize="2rem" color="#4F4F4F">
          Uploading successfull!
        </Text>
      </VStack>

      <Box
        style={{
          width: "350px",
          height: "250px",
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Image
          responsive
          onClick={handleCopyLink}
          cloudName="pasta"
          publicId={imageId}
          loading="lazy"
        >
          <Transformation radius="12" crop="fill" width="350" height="250" />
          <Transformation quality="auto" fetchFormat="auto" />
        </Image>
      </Box>

      <Flex
        ref={linkRef}
        justify="space-between"
        align="center"
        p="1rem"
        m="0 auto"
        border="1 px solid grey "
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        bg="#F6F8FB"
        borderRadius="8px"
        width="100%"
      >
        <Box textOverflow="ellipsis">{`http://res.cloudinary.com/pasta/image/upload/v1641508935/${publicId}`}</Box>
        <Box>
          <Button onClick={handleCopyLink}>Copy link</Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SecondPage;
