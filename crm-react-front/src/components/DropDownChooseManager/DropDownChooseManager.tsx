import { Select } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { fetchManagers } from '../../redux/slices/managersSlice';

export default function DropDownFilterBtn({ changeHandler, inputs, user_id }) {
  const allManagersObj = useMySelector((state: RootState) => state.managers);
  const dispatch = useMyDispatch();

  useEffect(() => {
    dispatch(fetchManagers());
  }, [dispatch]);

  const { managers } = allManagersObj;

  return (
    <>
      {user_id && (
        <div>
          <Select
            name="user_id"
            onChange={changeHandler}
            defaultValue={user_id}
            placeholder="My tasks"
          >
            {managers.map((manager) => (
              <option key={manager.id} value={manager.id}>
                Tasks of {manager.name}
              </option>
            ))}
          </Select>
        </div>
      )}
      {!user_id && (
        <div>
          <Select
            name="user_id"
            onChange={changeHandler}
            value={inputs.user_id}
            placeholder="My tasks"
          >
            {managers.map((manager) => (
              <option key={manager.id} value={manager.id}>
                Tasks of {manager.name}
              </option>
            ))}
          </Select>
        </div>
      )}
    </>
  );
}
