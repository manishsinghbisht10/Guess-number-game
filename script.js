'use strict';
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector('.check').addEventListener('click', function () {
  var inputNumber = Number(document.querySelector('.guess').value);
  var score = Number(
    document.querySelector('.label-score').textContent.split(': ')[1]
  );

  if (!inputNumber) {
    document.querySelector('.message').textContent = '⛔️ Wrong input';
  } else if (inputNumber > randomNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game';
    } else {
      document.querySelector('.message').textContent =
        '📈 Input number is high';
      document.querySelector('.label-score').textContent =
        '💯 Score: ' + --score;
      if (score === 0) {
        document.querySelector('.message').textContent = '💥 You lost the game';
      }
    }
  } else if (inputNumber < randomNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game';
    } else {
      document.querySelector('.message').textContent = '📉 Input number is low';
      document.querySelector('.label-score').textContent =
        '💯 Score: ' + --score;
      if (score === 0) {
        document.querySelector('.message').textContent = '💥 You lost the game';
      }
    }
  } else {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game';
    } else {
      document.querySelector('.message').textContent = '🎉 correct answer';
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      var highScore = Number(document.querySelector('.highscore').textContent);
      if (highScore < Number(score)) {
        document.querySelector('.highscore').textContent = score;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.label-score').textContent = '💯 Score: ' + 20;
});
