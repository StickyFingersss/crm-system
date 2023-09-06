import Layout from './components/Layout/Layout';
import { Managers } from './pages/Managers/Managers';
// import TaskCreator from './components/TaskCreator/TaskCreator';
import { Reports } from './pages/Reports/Reports';
import { TeamLead } from './pages/TeamLead/TeamLead';
import { Customer } from './pages/Customer/Customer';
import { TestComponent } from './components/TestComponent/TestComponent';

import { Routes, Route } from 'react-router-dom';
import ToDo from './pages/ToDo/ToDo';
import TodoList from './pages/TodoList/TodoList';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TeamLead />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/todos/:id" element={<ToDo />} />
        <Route path="/managers" element={<Managers />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
      </Route>
      <Route path="/test" element={<TestComponent />}></Route>
    </Routes>
  );
}

export default App;
