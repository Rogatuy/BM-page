import './elements/timer-card/timer-card.js';

//Buttons choose rate operation
const buttonsChooseRate = document.querySelectorAll('.btn-choose-rate');

if (buttonsChooseRate.length > 0) {
  buttonsChooseRate.forEach((button) => {
    button.addEventListener('click', function () {
      const cardNode = button.closest('.rate-card');
      const titleNode = cardNode.querySelector('.rate-card__title');

      if (titleNode) {
        console.log(`Тариф: ${titleNode.textContent}`);
      }
    });
  });
}

//Buttons tips operation
const buttonsTips = document.querySelectorAll('.rate-card__guarantee-btn');

if (buttonsTips.length > 0) {
  const closeAllTips = () => {
    const allTips = document.querySelectorAll('.rate-card__tip');
    allTips.forEach((tip) => {
      tip.classList.remove('show');
    });
  };

  buttonsTips.forEach((button) => {
    button.addEventListener('click', function () {
      const parentCard = button.closest('.rate-card__guarantee');
      const currentTip = parentCard.querySelector('.rate-card__tip');

      closeAllTips();

      if (currentTip && !currentTip.classList.contains('show')) {
        currentTip.classList.add('show');
      }
    });
  });

  document.addEventListener('click', function (event) {
    const clickedInsideTip = event.target.closest('.rate-card__tip');
    const clickedButton = event.target.closest('.rate-card__guarantee-btn');

    if (!clickedInsideTip && !clickedButton) {
      closeAllTips();
    }
  });
}
