import { useEffect, useRef, useState } from "react";
import { Flex, Text, Box, Button, VStack, Tooltip } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
// @ts-ignore
import { Image, Transformation, Placeholder } from "cloudinary-react";
function SecondPage() {
  const { publicId } = useParams();
  const [imageId, setImageId] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState<string | null>("");
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);

  function handleCopyLink() {
    linkRef?.current?.firstChild &&
      setCopiedLink(linkRef?.current?.firstChild.textContent);
    setCopied(true);
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
      w={["100%", "70%", "50%", "40%"]}
      h={["100vh", "50vh"]}
      overflow="hidden"
    >
      <VStack justifyContent="space-between" height={"20%"}>
        <BsFillCheckCircleFill size={"4rem"} color="#219653" />
        <Text fontSize="1.5 rem" color="#4F4F4F">
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
        <Image responsive cloudName="pasta" publicId={imageId} loading="lazy">
          <Transformation responsive radius="12" />
          <Transformation quality="auto" fetchFormat="auto" />
          <Placeholder type="pixelate" />
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
        <Box
          whiteSpace={"nowrap"}
          overflow="hidden"
          textOverflow="ellipsis"
        >{`http://res.cloudinary.com/pasta/image/upload/v1641508935/${publicId}`}</Box>
        <Box onBlur={() => setCopied(false)}>
          <Tooltip label={copied ? "Copied!" : "Copy"} closeOnClick={false}>
            <Button
              _hover={{ background: "#2F80ED" }}
              color="white"
              bg={"#2F80ED"}
              onClick={handleCopyLink}
            >
              Copy link
            </Button>
          </Tooltip>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SecondPage;
