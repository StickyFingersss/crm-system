export type InputsType = {
  title: string;
  text: string;
  status: boolean;
  deadline: string;
  user_id?: number;
  id?: number;
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

export interface IManager {
  id: number;
  name: string;
  login: string;
  password: string;
  isAdmin: boolean;
  team_id: number;
  createdAt: object | null;
  updatedAt: object | null;
}

export type TodosType = Array<TodoType>;

export type TodoItemProps = {
  todo: TodoType;
  editBtnTitle: string;
  createBtnTitle: string;
};

export type SliceStateType = {
  todos?: TodosType;
  calls?: CallsType;
  managers?: Array<IManager>;
  statuses?: StatusesType;
};

export type CallsType = Array<CallType>;

export type StatusesType = Array<StatusType>;

export type CallType = {
  name: string;
  count: number;
};

export type InputManagerType = {
  name: string;
  login: string;
  password: string;
};

export type StatusType = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type InputStatusType = {
  name: string;
};

export type StatusPropsType = {
  status: StatusType;
}
