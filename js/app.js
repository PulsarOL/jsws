
function newDate(date1, date2) {
  const difference = Math.abs(date2 - date1);

  const totalSeconds = Math.floor(difference / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours}:${minutes}:${seconds}`;
}

const date1 = new Date('2026-08-15T17:30:01');
const date2 = new Date('2026-08-15T19:30:02');

console.log(newDate(date1, date2));
