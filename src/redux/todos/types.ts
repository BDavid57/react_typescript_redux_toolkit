export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
  username?: string;
};

export type TodosState = {
  loading: boolean;
  todosData: TodoItem[];
  myTodo: TodoItem[];
  counter: number;
};
