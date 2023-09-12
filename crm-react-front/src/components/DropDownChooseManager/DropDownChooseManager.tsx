import { Select } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { fetchManagers } from '../../redux/slices/managersSlice';

export default function DropDownFilterBtn({
  changeHandler,
  inputs,
  selectedManager,
}) {
  const allManagersObj = useMySelector((state: RootState) => state.managers);
  const dispatch = useMyDispatch();

  useEffect(() => {
    dispatch(fetchManagers());
  }, [dispatch]);

  const { managers } = allManagersObj;

  useEffect(() => {
    if (selectedManager) {
      inputs.user_id = selectedManager.id;
    }
  }, [selectedManager, inputs]);

  return (
    <>
      {selectedManager && (
        <div>
          <Select
            name="user_id"
            onChange={changeHandler}
            value={Number(inputs.user_id)}
            placeholder={`Tasks for ${selectedManager?.name}`}
            // style={{ display: 'none' }}
            isDisabled
          >
            {managers.map((manager) => (
              <option key={manager.id} value={manager.id}>
                Tasks for {manager.name}
              </option>
            ))}
          </Select>
        </div>
      )}
      {!selectedManager && (
        <div>
          <Select
            name="user_id"
            onChange={changeHandler}
            value={Number(inputs.user_id)}
            placeholder="My tasks"
          >
            {managers.map((manager) => (
              <option key={manager.id} value={manager.id}>
                Tasks for {manager.name}
              </option>
            ))}
          </Select>
        </div>
      )}
    </>
  );
}
