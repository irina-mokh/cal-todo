import { useState } from 'react';
import { getDates } from '../../utils.tsx';
import { Day } from '../Day/Day';
import { useSelector } from 'react-redux';
import { IState } from '../../types/index.js';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEK_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const Calendar = () => {
  const store = [...useSelector((state: IState) => state.tasks)];

  const now = new Date();
  const [date, setDate] = useState<Date>(now);
  const m = date.getMonth();
  const y = date.getFullYear();
  const days = getDates(date);

  const daysRender = days.map((day, index) => <Day key={day.toDateString() + index} date={day} />);
  const headingRender = WEEK_NAMES.map((name, index) => (
    <li className="calendar__weekday" key={name + index}>
      {name}
    </li>
  ));

  return (
    <section className="calendar">
      <h2 className="calendar__year">{y}</h2>
      <header className="calendar__header">
        <p className="calendar__month">{MONTH_NAMES[m]}</p>
        <div className="calendar__controls">
          <button className="btn">&#12296;</button>
          <button className="btn">&#12297;</button>
        </div>
      </header>
      <ul className="calendar__heading">{headingRender}</ul>

      <ul className="calendar__list">{daysRender}</ul>
    </section>
  );
};
