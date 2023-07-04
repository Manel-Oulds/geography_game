let activeTimer = null; // Global variable to track the active timer

export function startTimer(timerCallback) {
  if (activeTimer) {
    clearInterval(activeTimer); // Stop the active timer
  }

  let timeLeft = 30; // 30 seconds
  timerCallback(timeLeft); // Initial display of timer

  activeTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      timerCallback(timeLeft);
    } else {
      clearInterval(activeTimer);
      activeTimer = null;
      // Timer finished, perform necessary actions
    }
  }, 1000); // Update timer every 1 second
}

export function stopTimer() {
  clearInterval(activeTimer);
  activeTimer = null;
}
