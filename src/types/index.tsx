export interface IState {
  period: String;
  main: Array<ITask>;
}

export interface ITask {
  id: string;
  title: string;
  done: boolean;
}
