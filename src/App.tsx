import { Box, Flex, Link } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

export default function App() {
  return (
    <Router>
      <Flex
        direction="column"
        justify="center"
        align="center"
        width="100%"
        height="100%"
      >
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path=":publicId" element={<SecondPage />} />
        </Routes>
        <Box pos={"fixed"} bottom="10">
          created by{" "}
          <Link href="https://github.com/ppasta90" target="_blank">
            {" "}
            Paolo Pastacaldi{" "}
          </Link>{" "}
          -{" "}
          <Link href="https://devchallenges.io/" target="_blank">
            devChallenges.io
          </Link>
        </Box>
      </Flex>
    </Router>
  );
}
