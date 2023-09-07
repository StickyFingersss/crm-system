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