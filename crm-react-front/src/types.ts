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
};

export type SliceStateType = {
  todos: TodosType;
  calls?: CallsType;
  managers?: Array<IManager>;
  customers?: CustomersType;
  comments?: CommentsType;
};
export type InputsType = {
  comment: string;
};
export type CommentType = {
  id: number;
  text: string;
  user_id: number;
  customer_id: number;
  createdAt: Date;
  updatedAt: Date;
};
export type CommentsType = Array<CommentType>;

export type InputManagerType = {
  name: string;
  login: string;
  password: string;
}
export type CallsType = Array<CallType>;

export type CallType = {
  name: string;
  count: number;
}
export type CustomerType = {
  id: number;
  name: string;
  balance: number;
  phone:string;
  email: string,
  status: string,
  manager_id: number,
  createdAt: Date;
  updatedAt: Date;
};
export type CustomersType = Array<CustomerType>;