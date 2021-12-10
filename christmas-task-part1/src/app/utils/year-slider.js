import noUiSlider from 'nouislider';

const yearSlider = document.querySelector('.year__slider');

const outputMin = document.querySelector('.year__output--min');
const outputMax = document.querySelector('.year__output--max');
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

yearSlider.noUiSlider.on('update', function (values, handle) {
  outputs[handle].value = Math.round(values[handle]);
});
