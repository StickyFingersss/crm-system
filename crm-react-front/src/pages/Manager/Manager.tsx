import styles from './Manager.module.css';
import MiniToDos from '../../components/MiniToDos/MiniToDos';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import { ClientList } from '../../components/ClientList/ClientList';

import { useMySelector } from '../../redux/hooks';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';

export const Manager = () => {
  const session = useMySelector((store) => store.isAutenticatedSlice.session);

  //! как получать имя манагера на чью страницу мы зашли?
  //! можно сюда импортировать useSelector для managers и доставать оттуда?
  const name = 'Vladislav2';
  const createTaskForManagerBtnTitle = `Create task for ${name}`;

  //! заменить на получение user_id из req.params
  const user_id = '11';

  if (session.isAdmin) {
    return (
      <div className={styles.mainManager}>
        <h1>Manager Page</h1>
        <h2>{name}</h2>
        <MiniToDos />
        <ModalButtonAddTodo
          createTaskForManagerBtnTitle={createTaskForManagerBtnTitle}
          user_id={user_id}
        />
        <ClientList path={'/customer/by-manager'} />
      </div>
    );
  } else if (session.login) {
    return (
      <div className={styles.mainManager}>
        <h1>Manager Page</h1>
        <h2>{session.name}</h2>
        <MiniToDos />

        <ClientList path={'/customer/by-manager'} />
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.h1Err}><img src="/404.png" alt="" />#Error: Login as team lead or register </h1>
    </div>
  );
};
