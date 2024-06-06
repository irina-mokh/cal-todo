export const getNumOfDays = (y: number, m: number) => new Date(y, m + 1, 0).getDate();

export const getDates = (date: Date, month = true) => {
  const days: Array<Date> = [];
  const m = date.getMonth();
  const y = date.getFullYear();

  if (month) {
    const n = getNumOfDays(y, m);
    for (let i = 1; i <= n; i++) {
      days.push(new Date(y, m, i));
    }
  } else {
    days.push(new Date(date));
  }
  // add prev days  to complete week
  while (days[0].getDay() !== 1) {
    const first = days[0];
    const prev = new Date(first);
    prev.setDate(first.getDate() - 1);
    days.unshift(prev);
  }

  // add next days to complete week
  while (days[days.length - 1].getDay() !== 0) {
    const last = days[days.length - 1];
    const next = new Date(last);
    next.setDate(next.getDate() + 1);
    days.push(next);
  }
  return days;
};

export const slideToDate = (date: Date, step: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + step);
  return newDate;
};
