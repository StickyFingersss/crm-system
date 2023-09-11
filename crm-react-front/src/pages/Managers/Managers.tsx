import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { Manager } from '../../components/Manager/Manager.jsx';

import type { RootState } from '../../redux/store.ts';
import { useSelector, useDispatch } from 'react-redux';
import { fetchManagers } from '../../redux/slices/managersSlice.ts';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar/NavBar.tsx';
import { useMySelector } from '../../redux/hooks';

export const Managers = () => {
  const dispatch = useDispatch();
  // const [stateManagers, setStateManagers] = useState([]);

  const buttons = [
    { name: 'Name', callback: () => console.log('Name') },
    { name: 'Calls', callback: () => console.log('Calls') },
  ];

  useEffect(() => {
    void dispatch(fetchManagers());
  }, [dispatch]);

  const { managers } = useSelector((state: RootState) => state.managers);

  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  if (session.isAdmin) {
    return (
      <>
        {managers.length ? (
          <>
            <h1>Wolfs Team</h1>
            <NavBar buttons={buttons} />
            {managers.map((el) => (
              <Manager key={el.id} name={el.name} id={el.id} />
            ))}
          </>
        ) : (
          <h1>You haven't access to this page</h1>
        )}
      </>
    );
  } else {
    return <h1>To go to this page you need to have administrator rights</h1>;
  }
};
