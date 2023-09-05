import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { Managers } from './pages/Managers/Managers';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { Reports } from './pages/Reports/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Managers />} />
          <Route path="/manager" element={<TaskCreator />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
