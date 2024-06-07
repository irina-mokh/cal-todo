import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../store/tasksReducer';
import { ITask } from '../../types';

export const Task = (props: ITask) => {
  const { title, done, id } = props;

  const dispatch = useDispatch();
  const handleToggleStatus = () => {
    dispatch(
      editTask({
        ...props,
        done: !done,
      })
    );
  };

  const saveNewTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(
      editTask({
        ...props,
        title: e.target.value,
      })
    );
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };
  return (
    <li className={`task ${done ? 'task_done' : ''}`}>
      <input type="checkbox" onChange={handleToggleStatus} checked={done}></input>
      <form className="task__wrapper">
        <input type="text" className="task__title" value={title} onChange={saveNewTitle} />
      </form>
      <button className="btn task__delete" onClick={handleDeleteTask}>
        🗙
      </button>
    </li>
  );
};
