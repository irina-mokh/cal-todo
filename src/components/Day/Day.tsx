import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Agenda } from '../Agenda/Agenda';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';
import { ITask } from '../../types';
import { TaskThumb } from '../TaskThumb/TaskThumb';

type DayProps = {
  date: Date,
};
export const Day = ({ date }: DayProps) => {
  const isToday = new Date().toDateString() === date.toDateString();

  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  const selectTasksByDay = createSelector(
    (state: RootState) => state.tasks,
    (tasks) => tasks.filter((task: ITask) => task.date == date.toLocaleDateString())
  );

  const tasks = useSelector(selectTasksByDay);
  const renderTaskThumbs = tasks
    .filter((task) => !task.done)
    .map((data) => <TaskThumb {...data} />);

  return (
    <>
      <li className="day" onClick={toggleModal}>
        <p className={`day__date  ${isToday ? 'day__date_today' : ''}`}>{date.getDate()}</p>
        <ul>{renderTaskThumbs}</ul>
      </li>
      {isModal && (
        <Modal title={date.toLocaleDateString()} close={toggleModal}>
          <Agenda date={date} tasks={tasks} />
        </Modal>
      )}
    </>
  );
};