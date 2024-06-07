import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/tasksReducer';
import { Task } from '../Task/Task';
import { ITask } from '../../types';

type AgendaProps = {
  date: Date,
  tasks: ITask[],
};
export const Agenda = ({ date, tasks }: AgendaProps) => {
  const [title, setTitle] = useState<string>('');

  const dispatch = useDispatch();
  const handleAddTask = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title) {
      dispatch(
        createTask({
          id: new Date().getTime(),
          title,
          date: date.toLocaleDateString(),
          done: false,
        })
      );
    }
    setTitle('');
  };
  const renderTasks = (tasks: ITask[]) => tasks.map((data) => <Task key={data.id} {...data} />);

  const done = tasks.filter((t) => t.done);
  const active = tasks.filter((t) => !t.done);
  const renderDoneTasks = renderTasks(done);

  const renderActiveTasks = renderTasks(active);

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
        <input className="btn" type="submit" value="+" disabled={!title.length} />
      </form>
      <ul>{renderActiveTasks}</ul>
      {done.length > 0 && (
        <>
          <p>Done:</p>
          <ul>{renderDoneTasks}</ul>
        </>
      )}
    </div>
  );
};
