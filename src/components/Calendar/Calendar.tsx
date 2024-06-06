import { useState } from 'react';
import { getDates, getNumOfDays, slideToDate } from '../../utils.tsx';
import { Day } from '../Day/Day';
import { useDateIndexes } from '../../hooks';

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
const WEEK_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const Calendar = () => {
  const now = new Date();

  const [date, setDate] = useState<Date>(now);
  const { y, m } = useDateIndexes(date);
  const [step, setStep] = useState(getNumOfDays(y, m));

  const handleNext = () => {
    setDate(slideToDate(date, step));
  };

  const handlePrev = () => {
    setDate(slideToDate(date, -step));
  };

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
          <button className="btn" onClick={handlePrev}>
            &#12296;
          </button>
          <button className="btn" onClick={handleNext}>
            &#12297;
          </button>
        </div>
      </header>
      <ul className="calendar__heading">{headingRender}</ul>

      <ul className="calendar__list">{daysRender}</ul>
    </section>
  );
};
