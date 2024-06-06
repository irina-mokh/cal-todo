type DayProps = {
  date: Date,
};
export const Day = ({ date }: DayProps) => {
  const isToday = new Date().toDateString() === date.toDateString();

  return (
    <li className="day">
      <p className={`day__date  ${isToday ? 'day__date_today' : ''}`}>{date.getDate()}</p>
      {/* <ul>{tasks}</ul> */}
    </li>
  );
};
