import noUiSlider, { target } from 'nouislider';

const countSlider = <target>document.querySelector('.count__slider');

const outputMin = <HTMLElement>document.querySelector('.count__output--min');
const outputMax = <HTMLElement>document.querySelector('.count__output--max');
const outputs = [outputMin, outputMax];

noUiSlider.create(countSlider, {
  start: [1, 12],
  step: 1,
  connect: true,
  range: {
    min: 1,
    max: 12,
  },
});

countSlider?.noUiSlider?.on('update', function (values, handle): void {
  outputs[handle].innerText = String(Math.round(Number(values[handle])));
});
