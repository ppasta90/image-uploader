import { useEffect, useRef, useState } from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// @ts-ignore
import { Image, CloudinaryContext } from "cloudinary-react";
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
      /* minW="30%" */
      /* w="80%" */
      //w={["100%", "70%", "50%", "40%"]}
      /* margin="0 auto" */
      //h={["100vh", "50vh"]}
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      p="2rem 4rem"
    >
      <Text fontSize="18px">Uploading successfull!</Text>

      <Image onClick={handleCopyLink} cloudName="pasta" publicId={imageId} />

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
