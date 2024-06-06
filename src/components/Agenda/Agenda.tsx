import React, { useState } from 'react';
import { ITask } from '../../types';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/tasksReducer';
import { Task } from '../Task/Task';

type AgendaProps = {
  date: Date,
  tasks: ITask[],
};
export const Agenda = ({ date, tasks }: AgendaProps) => {
  const [title, setTitle] = useState<string>('');

  const dispatch = useDispatch();
  const handleAddTask = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createTask({
        id: new Date(),
        title,
        date: date.toLocaleDateString(),
        done: false,
      })
    );
    setTitle('');
  };
  const renderTasks = (tasks: ITask[]) => tasks.map((data) => <Task key={data.id} {...data} />);
  const renderDoneTasks = renderTasks(tasks.filter((t) => t.done));

  const renderActiveTasks = renderTasks(tasks.filter((t) => !t.done));

  return (
    <div className="agenda">
      <form className="agenda__add" onSubmit={handleAddTask}>
        <input
          className="input"
          type="text"
          placeholder="Add a task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <input className="btn" type="submit" value="+" />
      </form>
      <ul>{renderActiveTasks}</ul>
      <ul>{renderDoneTasks}</ul>
    </div>
  );
};
