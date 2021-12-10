import noUiSlider from 'nouislider';

const countSlider = document.querySelector('.count__slider');

const outputMin = document.querySelector('.count__output--min');
const outputMax = document.querySelector('.count__output--max');
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

countSlider.noUiSlider.on('update', function (values, handle) {
  outputs[handle].value = Math.round(values[handle]);
});
