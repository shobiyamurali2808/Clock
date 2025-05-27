let clockInterval = null;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the clock
function startClock() {
  if (!clockInterval) {
    updateClock(); // Immediately update before the first interval
    clockInterval = setInterval(updateClock, 1000);
  }
}

// Stop the clock
function stopClock() {
  clearInterval(clockInterval);
  clockInterval = null;
}
