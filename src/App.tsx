import { Routes, Route } from 'react-router-dom';
import Spreadsheet from './pages/Spreadsheet';

const App = () => {
  return (
    <Routes>
      <Route index element={<Spreadsheet />} />
    </Routes>
  );
};

export default App;
