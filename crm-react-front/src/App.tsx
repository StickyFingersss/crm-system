import Layout from './components/Layout/Layout';
import { WolfsTeam } from './pages/WolfsTeam/WolfsTeam';
// import TaskCreator from './components/TaskCreator/TaskCreator';
import { Reports } from './pages/Reports/Reports';
import { TeamLead } from './pages/TeamLead/TeamLead';
import { ManagerPage } from './pages/ManagerPage/ManagerPage';
import { Advertiser } from './pages/Advertiser/Advertiser';

import { Routes, Route } from 'react-router-dom';
import ToDo from './pages/ToDo/ToDo';
import { Customer } from './pages/Customer/Customer';
import { StartPage } from './pages/StartPage/StartPage';
import { useMyDispatch, useMySelector } from './redux/hooks';
import { useEffect, useState } from 'react';
import { fetchIsAutenticated } from './redux/thunkIsAutenticated';
import Pagination2 from './components/Pagination/Pagination2';

function App(): JSX.Element {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchIsAutenticated());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="/lead" element={<TeamLead />} />
        <Route path="/todos" element={<Pagination2 />} />
        <Route path="/todos/:id" element={<ToDo />} />
        <Route path="/managers" element={<WolfsTeam />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        {/* <Route path="/customer" element={<Customer />}></Route> */}
        <Route path="/customer/:id" element={<Customer />}></Route>
        <Route path="/manager/:id" element={<ManagerPage />}></Route>
        <Route path="/advertiser" element={<Advertiser />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
