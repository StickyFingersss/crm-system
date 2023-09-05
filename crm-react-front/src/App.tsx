import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { Managers } from './pages/Managers/Managers';
// import TaskCreator from './components/TaskCreator/TaskCreator';
import { Reports } from './pages/Reports/Reports';
import { TeamLead } from './pages/TeamLead/TeamLead';
import { Customer } from './pages/Customer/Customer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TeamLead />} />
          <Route path="/managers" element={<Managers />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
