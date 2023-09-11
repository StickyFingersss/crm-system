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
  calls?: CallsCreateType;
  statsCalls?: CallsType;
  managers?: Array<IManager>;
  statuses?: StatusesType;
  customers?: CustomersType;
  customer?: CustomerType;
  comments?: CommentsType;
  deals?: DealsType;
  isLoading: boolean;
};
export type InputsCommentType = {
  comment: string;
};

export type StatusType = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type StatusesType = Array<StatusType>;

export type InputStatusType = {
  name: string;
}

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

export type CallsCreateType = Array<CallCreateType>

export type CallCreateType = {
  user_id: number;
  customer_id: number;
}

export type CallType = {
  name: string;
  count: number;
  total: number;
  dealCount: number;
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

export type InputDealType = {
  total: number;
}

export type DealsType = Array<DealType>;

export type DealType = {
  total: number;
  user_id: number;
  customer_id: number;
}
export type DealBodyType = {
  id: string;
  inputDeal: InputDealType;
}