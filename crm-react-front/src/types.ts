export type InputsType = {
  title: string;
  text: string;
  status: boolean;
  deadline: object;
  user_id: number;
  id: number;
};

export type TodoType = {
  id: number;
  title: string;
  text: string;
  status: boolean;
  deadline: string;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TodosType = Array<TodoType>;

export type TodoItemProps = {
  todo: TodoType;
  editBtnTitle: string;
  createBtnTitle: string;
};

export type SliceStateType = {
  todos: TodosType;
};
