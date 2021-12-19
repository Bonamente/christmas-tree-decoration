import { IState, setLocalStorage } from '../../../app';
import buildHtmlForFormElement from './form';
import rerenderCards from '../../../renders/rerender-cards';

const buildValueFilters = (state: IState) => {
  const filtersSection = document.createElement('section');
  const filtersTitle = document.createElement('h2');
  const formElement = document.createElement('form');

  filtersSection.classList.add('filters');
  filtersTitle.classList.add('filters__title');
  filtersTitle.textContent = 'Фильтры по значению';

  formElement.innerHTML = buildHtmlForFormElement(state);

  formElement.classList.add('filters__form', 'form');

  formElement.addEventListener('change', (e: Event) => {
    const activeElement = e.target as HTMLInputElement;
    const [filterGroup, valueName] = activeElement.name.split('-');

    if (activeElement.checked) {
      state.valueFilter[filterGroup][valueName] = true;
    } else {
      state.valueFilter[filterGroup][valueName] = false;
    }

    setLocalStorage(state);
    rerenderCards(state); 
  });

  filtersSection.append(filtersTitle, formElement);

  return filtersSection;
};

export default buildValueFilters;
