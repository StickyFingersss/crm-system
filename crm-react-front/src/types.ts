export type TodoType = {
  id: number;
  title: string;
  text: string;
  status: boolean;
  deadline: Date;
  userID: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TodosType = Array<TodoType>;

export type TodoItemProps = {
  todo: TodoType;
};

export type SliceStateType = {
  todos?: TodosType;
  calls?: CallsType;
};

export type CallsType = Array<CallType>;

export type CallType = {
  name: string;
  count: number;
}