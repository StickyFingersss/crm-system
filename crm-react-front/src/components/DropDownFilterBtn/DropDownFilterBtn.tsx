import { Select } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { fetchManagers } from '../../redux/slices/managersSlice';

export default function DropDownFilterBtn() {
  const allManagersObj = useMySelector((state: RootState) => state.managers);
  const dispatch = useMyDispatch();

  useEffect(() => {
    dispatch(fetchManagers());
  }, [dispatch]);

  const { managers } = allManagersObj;

  return (
    <div>
      <Select placeholder="Select option">
        {managers.map((manager) => (
          <option key={manager.id} value={manager.id}>
            {manager.name}
          </option>
        ))}
      </Select>
    </div>
  );
}
