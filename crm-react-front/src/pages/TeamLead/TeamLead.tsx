import MiniToDos from '../../components/MiniToDos/MiniToDos';
import ModalButtonLead from '../../components/ModalButtonLead/ModalButtonLead';
import { ClientList } from '../../components/ClientList/ClientList';
import { useMySelector } from '../../redux/hooks';

export const TeamLead = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  // useEffect(() => {
  //   console.log('component update');
  // }, [session]);

  if (session.isAdmin) {
    return (
      <>
        <MiniToDos />
        <ModalButtonLead />
        <ClientList path={'/customer/all'} />
      </>
    );
  } else {
    return <h1>Login as team lead or register</h1>;
  }
};
