import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Agenda } from '../Agenda/Agenda';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';
import { ITask } from '../../types';
import { TaskThumb } from '../TaskThumb/TaskThumb';
import { useDateIndexes } from '../../hooks';

type DayProps = {
  date: Date,
};
export const Day = ({ date }: DayProps) => {
  const isToday = new Date().toDateString() === date.toDateString();
  const [isDayOff, setIsDayOff] = useState<boolean>(false);
  const { y, m, d } = useDateIndexes(date);

  const req = '' + y + (m < 9 ? '0' + (m + 1) : m + 1) + (d < 10 ? '0' + d : d);
  useEffect(() => {
    try {
      fetch(`https://isdayoff.ru/${req}`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((result) => {
          setIsDayOff(!!result);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  const selectTasksByDay = createSelector(
    (state: RootState) => state.tasks,
    (tasks) => tasks.filter((task: ITask) => task.date == date.toLocaleDateString())
  );

  const tasks = useSelector(selectTasksByDay);
  const renderTaskThumbs = tasks
    .filter((task) => !task.done)
    .map((data) => <TaskThumb key={data.id} {...data} />);

  return (
    <>
      <li className="day" onClick={toggleModal}>
        <p
          className={`day__date  ${isToday ? 'day__date_today' : ''} ${isDayOff ? 'day__date_off' : ''}`}
        >
          {date.getDate()}
        </p>
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
