import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { Manager } from '../../components/Manager/Manager';

import type { RootState } from '../../redux/store.ts';
import { useSelector, useDispatch } from 'react-redux';
import { fetchManagers } from '../../redux/slices/managersSlice.ts';
import { useEffect, useState } from 'react';

export const Managers = () => {
  const dispatch = useDispatch();
  // const [stateManagers, setStateManagers] = useState([]);

  useEffect(() => {
    void dispatch(fetchManagers());
  }, [dispatch]);

  const { managers } = useSelector((state: RootState) => state.managers);
  return (
    <>
      <h1>Wolfs Team</h1>

      <NavigationBar />
      {managers.length && managers.map((el) => <Manager key={el.id} name={el.name} id={el.id} />)}
    </>
  );
};
