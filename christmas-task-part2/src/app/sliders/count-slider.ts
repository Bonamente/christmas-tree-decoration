import noUiSlider, { target } from 'nouislider';
import { IState } from '../types';
import setLocalStorage from '../utils/set-local-storage';
import renderCards from '../renders/render-cards';

const createCountSlider = (state: IState): void => {
  const { countFilter } = state.rangeFilters;
  const { initMin, initMax, min, max } = countFilter;
  const countSlider = <target>document.querySelector('.count__slider');
  const outputMin = <HTMLElement>document.querySelector('.count__output--min');
  const outputMax = <HTMLElement>document.querySelector('.count__output--max');
  const outputs = [outputMin, outputMax];

  noUiSlider.create(countSlider, {
    start: [min, max],
    step: 1,
    connect: true,
    range: {
      min: initMin,
      max: initMax,
    },
  });

  countSlider?.noUiSlider?.on('update', (values, handle): void => {
    outputs[handle].innerText = String(Math.round(Number(values[handle])));

    const [value1, value2] = values;
    const curMinVal = Math.trunc(+value1);
    const curMaxVal = Math.trunc(+value2);

    state.rangeFilters.countFilter.min = curMinVal;
    state.rangeFilters.countFilter.max = curMaxVal;

    setLocalStorage(state);
    renderCards(state);
  });

  const resetFiltersBtn = document.querySelector('.reset__filters-btn') as HTMLElement;

  resetFiltersBtn.addEventListener('click', (): void => {
    countSlider?.noUiSlider?.set([initMin, initMax]);
  });
};

export default createCountSlider;
