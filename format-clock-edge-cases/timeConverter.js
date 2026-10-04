// function receives a string representing time in 24-hour format as an argument

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  const period = hours >= 12 ? "pm" : "am";

  let displayHour = hours % 12;
  if (displayHour === 0) {
    displayHour = 12;
  }

  return `${displayHour}:${minutes} ${period}`;
}

export { formatAs12HourClock };
