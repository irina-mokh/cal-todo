import { useEffect, useState } from 'react';
import { Day } from '../Day/Day';
import { Switcher } from '../Switcher';
import { getDates, getNumOfDays, slideToDate } from '../../utils.tsx';
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
  const [isMonthView, setIsMonthView] = useState(true);

  const toggleView = () => {
    setIsMonthView(!isMonthView);
  };
  useEffect(() => {
    if (isMonthView) {
      setStep(getNumOfDays(y, m));
    } else {
      setStep(7);
    }
  }, [isMonthView]);

  const handleNext = () => {
    setDate(slideToDate(date, step));
  };

  const handlePrev = () => {
    setDate(slideToDate(date, -step));
  };

  const days = getDates(date, isMonthView);

  const daysRender = days.map((day, index) => <Day key={day.toDateString() + index} date={day} />);
  const headingRender = WEEK_NAMES.map((name, index) => (
    <li className="calendar__weekday" key={name + index}>
      {name}
    </li>
  ));

  return (
    <section className={`calendar ${!isMonthView ? 'calendar_week' : ''}`}>
      <header className="calendar__header">
        <Switcher handleToggle={toggleView} />
        <p className="calendar__month">{MONTH_NAMES[m]}</p>
        <div className="calendar__controls">
          <button className="btn" onClick={handlePrev}>
            &lt;
          </button>
          <button className="btn" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <h2 className="calendar__year">{y}</h2>
      </header>
      <ul className="calendar__heading">{headingRender}</ul>

      <ul className="calendar__list">{daysRender}</ul>
    </section>
  );
};
