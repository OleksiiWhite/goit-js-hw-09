const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const firstMenuItem = document.querySelector('.menu-item');

firstMenuItem.style.textAlign = `center`;

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    firstMenuItem.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
