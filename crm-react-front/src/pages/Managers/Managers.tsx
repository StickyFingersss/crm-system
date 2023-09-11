
import { useEffect } from 'react';
import { useMySelector } from '../../redux/hooks';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store.ts';
import { fetchManagers } from '../../redux/slices/managersSlice.ts';
import { useNavigate } from 'react-router-dom';

import { Manager } from '../../components/Manager/Manager.jsx';
import { NavBar } from '../../components/NavBar/NavBar.tsx';

export const Managers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const buttons = [
    { name: 'Back', callback: () => navigate('/lead') },
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
