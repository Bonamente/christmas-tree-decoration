import noUiSlider, { target } from 'nouislider';
import { IState } from '../app';
import setLocalStorage from '../utils/set-local-storage';
import renderCards from '../renders/render-cards';

const createYearSlider = (state: IState): void => {
  const { yearFilter } = state.rangeFilters;
  const { initMin, initMax, min, max } = yearFilter;
  const yearSlider = <target>document.querySelector('.year__slider');
  const outputMin = <HTMLElement>document.querySelector('.year__output--min');
  const outputMax = <HTMLElement>document.querySelector('.year__output--max');
  const outputs = [outputMin, outputMax];

  noUiSlider.create(yearSlider, {
    start: [min, max],
    step: 10,
    connect: true,
    range: {
      min: initMin,
      max: initMax,
    },
  });

  yearSlider?.noUiSlider?.on('update', (values, handle): void => {
    outputs[handle].innerText = String(Math.round(Number(values[handle])));

    const [value1, value2] = values;
    const curMinVal = Math.trunc(+value1);
    const curMaxVal = Math.trunc(+value2);

    state.rangeFilters.yearFilter.min = curMinVal;
    state.rangeFilters.yearFilter.max = curMaxVal;

    setLocalStorage(state);
    renderCards(state);
  });

  const resetFiltersBtn = document.querySelector('.reset__filters-btn') as HTMLElement;

  resetFiltersBtn.addEventListener('click', (): void => {
    yearSlider?.noUiSlider?.set([initMin, initMax]);
  });
};

export default createYearSlider;
