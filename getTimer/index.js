// '2023-08-21T13:04:06.611Z'
function getTimer(isoDate, timerInfo) {
  const date = new Date(isoDate);
  const timeTillDate =  date - Date.now();
  const seconds = Math.floor(timeTillDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  timerInfo.seconds = seconds % 60;
  timerInfo.minutes = minutes % 60;
  timerInfo.hours= hours;

}
const timerInfo = {
  hours:0,
  minutes:0,
  seconds:0
}
setInterval(() => {
  getTimer('2023-08-21T13:04:06.611Z', timerInfo)
  console.log(timerInfo)
}, 1000);
