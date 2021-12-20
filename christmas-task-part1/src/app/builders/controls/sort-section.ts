import { IState } from '../../app';

import createCountSLider from '../../sliders/count-slider';
import createYearSlider from '../../sliders/year-slider';

import resetFilters from '../../utils/reset-filters';
import setLocalStorage from '../../utils/set-local-storage';
import renderValueFilters from '../../renders/render-value-filters';
import renderCards from '../../renders/render-cards';
import renderPage from '../../renders/page-render';

const buildSortSection = (state: IState): Node => {
  const sortSection = document.createElement('section');
  const sortTitle = document.createElement('h2');
  const sortSelect = document.createElement('select');
  const resetButtonsContainer = document.createElement('div');
  const resetFiltersBtn = document.createElement('button');
  const resetSettingsBtn = document.createElement('button');

  sortSection.classList.add('sort');

  sortTitle.classList.add('sort__title');
  sortTitle.textContent = 'Сортировка';

  sortSelect.classList.add('sort__select');
  sortSelect.innerHTML = `
    <option value="name-ascending">По названию от «А» до «Я»</option>
    <option value="name-descending">По названию от «Я» до «А»</option>
    <option value="year-ascending">По году приобретения (от старых к новым)</option>
    <option value="year-descending">По году приобретения (от новых к старым)</option> 
  `;

  switch (state.sortingType) {
    case 'name-ascending':
      sortSelect.selectedIndex = 0;
      break;
    case 'name-descending':
      sortSelect.selectedIndex = 1;
      break;
    case 'year-ascending':
      sortSelect.selectedIndex = 2;
      break;
    case 'year-descending':
      sortSelect.selectedIndex = 3;
      break;
    default:
      throw new Error('invalid sortingType parameter value');
  }

  sortSelect.addEventListener('change', (): void => {
    const value = sortSelect.options[sortSelect.selectedIndex].value;
    state.sortingType = value;

    setLocalStorage(state);
    renderCards(state);
  });

  resetButtonsContainer.classList.add('sort__buttons', 'reset');
  resetFiltersBtn.classList.add('reset__filters-btn');
  resetFiltersBtn.textContent = 'Сброс фильтров';
  resetSettingsBtn.classList.add('reset__settings-btn');
  resetSettingsBtn.textContent = 'Сброс настроек';

  resetFiltersBtn.addEventListener('click', (): void => {
    resetFilters(state);
    renderValueFilters(state);
    renderCards(state);
    setLocalStorage(state);
  });

  resetSettingsBtn.addEventListener('click', (): void => {
    localStorage.clear();

    resetFilters(state);
    state.searchInput = '';
    state.favoritesIds.clear();
    state.sortingType = 'name-ascending';

    renderPage(state);
    createCountSLider(state);
    createYearSlider(state);
  });

  resetButtonsContainer.append(resetFiltersBtn, resetSettingsBtn);
  sortSection.append(sortTitle, sortSelect, resetButtonsContainer);

  return sortSection;
};

export default buildSortSection;
