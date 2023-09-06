import type { RootState } from '../../redux/store.ts';
import { useSelector, useDispatch } from 'react-redux';
import { fetchManagers } from '../../redux/slices/managersSlice.ts';
import { useEffect } from 'react';

export function TestComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    void dispatch(fetchManagers());
  }, [dispatch]);

  const managers = useSelector((state: RootState) => state.managers);
  console.log(managers);

  return <div>sgdfngoisndfiogj</div>;
}
