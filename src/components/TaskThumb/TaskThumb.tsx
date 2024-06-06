import { ITask } from '../../types';

export const TaskThumb = ({ title }: ITask) => {
  return <li className="day__task">{title}</li>;
};
