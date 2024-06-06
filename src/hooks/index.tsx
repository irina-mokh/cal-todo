export const useDateIndexes = (date: Date) => {
  return {
    y: date.getFullYear(),
    m: date.getMonth(),
    d: date.getDate(),
  };
};
