import { IState } from '../../../types';
import setLocalStorage from '../../../utils/set-local-storage';
import buildHtmlForFormElement from './form';
import renderCards from '../../../renders/render-cards';

const buildValueFilters = (state: IState): Node => {
  const filtersSection = <HTMLElement>document.createElement('section');
  const filtersTitle = <HTMLHeadingElement>document.createElement('h2');
  const formElement = <HTMLFormElement>document.createElement('form');

  filtersSection.classList.add('filters');
  filtersTitle.classList.add('filters__title');
  filtersTitle.textContent = 'Фильтры по значению';

  formElement.innerHTML = buildHtmlForFormElement(state);

  formElement.classList.add('filters__form', 'form');

  formElement.addEventListener('change', (e: Event): void => {
    const activeElement = e.target as HTMLInputElement;
    const [filterGroup, valueName] = activeElement.name.split('-');

    state.valueFilter[filterGroup][valueName] = activeElement.checked;

    renderCards(state);
    setLocalStorage(state);
  });

  filtersSection.append(filtersTitle, formElement);

  return filtersSection;
};

export default buildValueFilters;
