import { ITask } from '../../types';

export const Task = ({ title, done }: ITask) => {
  return (
    <li className="task">
      <p>{title}</p>
    </li>
  );
};
