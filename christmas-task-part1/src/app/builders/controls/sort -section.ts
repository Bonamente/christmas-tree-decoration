import { IState, setLocalStorage } from '../../app';

import buildHtmlForFormElement from './value-filters/form';
import resetFilters from '../../utils/reset-filters';
import rerenderCards from '../../renders/rerender-cards';

const buildSortSection = (state: IState) => {
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

  sortSelect.addEventListener('change', () => {
    const value = sortSelect.options[sortSelect.selectedIndex].value;
    state.sortingType = value;

    setLocalStorage(state);
    rerenderCards(state);
  });

  resetButtonsContainer.classList.add('sort__buttons', 'reset');
  resetFiltersBtn.classList.add('reset__filters-btn');
  resetFiltersBtn.textContent = 'Сброс фильтров';
  resetSettingsBtn.classList.add('reset__settings-btn');
  resetSettingsBtn.textContent = 'Сброс настроек';

  resetFiltersBtn.addEventListener('click', () => {
    resetFilters(state);

    const formElement = document.querySelector('.filters__form') as HTMLElement;
    formElement.innerHTML = buildHtmlForFormElement(state);

    setLocalStorage(state);
    rerenderCards(state);   
  });

  resetSettingsBtn.addEventListener('click', () => {
    //TODO
    localStorage.clear();
  });

  resetButtonsContainer.append(resetFiltersBtn, resetSettingsBtn);
  sortSection.append(sortTitle, sortSelect, resetButtonsContainer);

  return sortSection;
};

export default buildSortSection;
