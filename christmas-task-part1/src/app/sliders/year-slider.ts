import noUiSlider, { target } from 'nouislider';

const yearSlider = <target>document.querySelector('.year__slider');

const outputMin = <HTMLElement>document.querySelector('.year__output--min');
const outputMax = <HTMLElement>document.querySelector('.year__output--max');
const outputs = [outputMin, outputMax];

noUiSlider.create(yearSlider, {
  start: [1940, 2020],
  step: 10,
  connect: true,
  range: {
    min: 1940,
    max: 2020,
  },
});

yearSlider?.noUiSlider?.on('update', function (values, handle): void {
  outputs[handle].innerText = String(Math.round(Number(values[handle])));
});
