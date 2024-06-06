export interface IState {
  tasks: ITasksState;
}
export type ITasksState = Array<ITask>;

export interface ITask {
  id: string;
  // toLocaleDateString
  date: string;
  title: string;
  done: boolean;
}
