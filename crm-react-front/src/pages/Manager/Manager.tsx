import MiniToDos from '../../components/MiniToDos/MiniToDos';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import { ClientList } from '../../components/ClientList/ClientList';

import { useMySelector } from '../../redux/hooks';

export const Manager = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  if (session.isAdmin) {
    return (
      <>
        <h1>Manager Page</h1>
        <h2>{session.name}</h2>
        <MiniToDos />
        <TaskCreator />
        <ClientList path={'/customer/by-manager'} />
      </>
    );
  } else if (session.login) {
    return (
      <>
        <h1>Manager Page</h1>
        <h2>{session.name}</h2>
        <MiniToDos />

        <ClientList path={'/customer/by-manager'} />
      </>
    );
  }

  return (
    <div>
      <h1>Login or register</h1>
    </div>
  );
};
