export interface IState {
  date: DateState;
  tasks: TasksState;
}

export type DateState = {
  current: Date;
}
export type TasksState = Array<IYear>

export type IYear = Array<IMonth>
export type IMonth = Array<IDay>
export type IDay = Array<ITask>

export interface ITask {
  id: string;
  title: string;
  done: boolean;
}
