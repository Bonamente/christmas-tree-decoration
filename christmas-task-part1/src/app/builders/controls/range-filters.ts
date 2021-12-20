import { IState } from '../../app';

const buildRangeFilters = (state: IState): Node => {
  const rangeSection = document.createElement('section');
  rangeSection.classList.add('range');

  rangeSection.innerHTML = `
    <h2 class="range__title">Фильтры по диапазону</h2>  
    <section class="range__count count">
      <h3 class="count__title">Количество экземпляров:</h3> 
      <div class="count__slider-container">             
        <output class="count__output count__output--min">${state.rangeFilters.countFilter.min}</output>
        <div class="count__slider"></div>
        <output class="count__output count__output--max">${state.rangeFilters.countFilter.max}</output>
      </div>          
    </section>  
    <section class="range__year year">
      <h3 class="year__title">Год приобретения:</h3> 
      <div class="year__slider-container">
        <output class="year__output year__output--min">${state.rangeFilters.yearFilter.min}</output>
        <div class="year__slider"></div>
        <output class="year__output year__output--max">${state.rangeFilters.yearFilter.max}</output>
      </div>          
    </section>
  `;

  return rangeSection;
};

export default buildRangeFilters;
