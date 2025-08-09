function dateToX(date, startDate, pxPerDay) {
  const diff = (new Date(date) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  return diff * pxPerDay;
}

function xToDate(x, startDate, pxPerDay) {
  const days = Math.round(x / pxPerDay);
  const newDate = new Date(startDate);
  newDate.setDate(newDate.getDate() + days);
  return newDate.toISOString().slice(0, 10);
}


export { dateToX, xToDate };