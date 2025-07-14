import { Routes, Route } from "react-router-dom";
import Spreadsheet from "./pages/Spreadsheet";
import Landing from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<Spreadsheet />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
};

export default App;
