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
  customers?: CustomersType;
  customer?: CustomerType;
  comments?: CommentsType;
};
// export type InputsType = {
//   comment: string;
// };
// export type StatusesType = Array<StatusType>;

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