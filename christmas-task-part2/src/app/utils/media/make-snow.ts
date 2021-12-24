let timeoutTimerId: ReturnType<typeof setTimeout>;
let intervalTimerId: ReturnType<typeof setInterval>;

const createSnowFlake = (): void => {
  const decorationSection = <HTMLElement>document.querySelector('.decoration');
  const snowFlake = document.createElement('i');
  snowFlake.classList.add('fas');
  snowFlake.classList.add('fa-snowflake');

  snowFlake.style.left = `${Math.random() * decorationSection.offsetWidth}px`;
  snowFlake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowFlake.style.opacity = `${Math.random()}`;
  snowFlake.style.fontSize = `${Math.random() * 10 + 10}px`;

  decorationSection.appendChild(snowFlake);

  timeoutTimerId = setTimeout(() => {
    snowFlake.remove();
  }, 5000);
};

const makeSnow = (isActive: boolean): void => {
  if (isActive) {
    intervalTimerId = setInterval(createSnowFlake, 100);
  } else {
    clearTimeout(timeoutTimerId);
    clearInterval(intervalTimerId);
  }
};

export default makeSnow;
