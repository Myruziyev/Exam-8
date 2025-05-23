function updateClock() {
  let now = moment();
  let timeString = now.format('HH:mm:ss');
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

