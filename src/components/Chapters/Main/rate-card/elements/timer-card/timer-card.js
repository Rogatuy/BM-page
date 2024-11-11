const initialTimeInSeconds =
  new Date().getHours() * 3600 +
  new Date().getMinutes() * 60 +
  new Date().getSeconds();

function onTimerEnd(timerNode) {
  const cardNode = timerNode.closest('.rate-card');
  const buttonCardNode = cardNode.querySelector('.btn-choose-rate');
  if (buttonCardNode) buttonCardNode.disabled = true;
}

function startCountdownTimer(elementId, initialTimeInSeconds) {
  const timerElement = document.getElementById(elementId);
  const timerDisplay = timerElement?.querySelector('.timer-card__value');

  if (!timerDisplay) {
    console.log('Элемент с таймером отсутствует на странице');
    return;
  }

  let timeRemaining = initialTimeInSeconds;

  function updateTimer() {
    const hours = String(Math.floor(timeRemaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeRemaining % 3600) / 60)).padStart(
      2,
      '0'
    );
    const seconds = String(timeRemaining % 60).padStart(2, '0');

    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      onTimerEnd(timerElement);
    } else {
      timeRemaining--;
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

startCountdownTimer('installment-timer', initialTimeInSeconds);
