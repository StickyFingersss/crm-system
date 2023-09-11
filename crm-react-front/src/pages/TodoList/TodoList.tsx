import { Link } from 'react-router-dom';
import { useMySelector } from '../../redux/hooks';

import ToDo from '../ToDo/ToDo';

import BtnScrollUp from '../../components/ScrollButton/ScrollButton';
import ModalButtonAddTodo from '../../components/ModalButtonAddTodo/ModalButtonAddTodo';
import DropDownFilterBtn from '../../components/DropDownFilterBtn/DropDownFilterBtn';


export default function TodoList({
  currentTodos,
  selectedManager,
  setSelectedManager,
}): JSX.Element {
  const header = 'Your tasks';
  const createBtnTitle = 'Create new task';
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  return (
    <div className="toDoListContainer">
      <Link to="/">Back to main page</Link>
      {session.isAdmin ? <Link to="/lead">To TeamLead page</Link> : ''}

      <h1>{header}</h1>

      <ModalButtonAddTodo createBtnTitle={createBtnTitle} />
      <DropDownFilterBtn
        selectedManager={selectedManager}
        setSelectedManager={setSelectedManager}
      />
      <ul>
        {currentTodos?.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
      <BtnScrollUp />
    </div>
  );
}
