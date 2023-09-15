import { Button } from '@chakra-ui/react'
import { fetchDelStatus } from '../../redux/thunkActions/statusesActions';
import { StatusPropsType } from '../../types';
import { useMyDispatch } from '../../redux/hooks';

export default function Status({ status }: StatusPropsType ) {

  const dispatch = useMyDispatch();

  const deleteHandler = async (): Promise<void> => {
    void dispatch(fetchDelStatus(status.id));
  };
  
  return (
    <div key={status.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <p style={{ marginRight: '8px', fontSize: 30 }}>{status.name}</p>
      <Button size="sm" colorScheme="orange" onClick={deleteHandler} fontSize={25}>Delete</Button>
  </div>
  )
}



