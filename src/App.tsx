import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path=":publicId" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}
