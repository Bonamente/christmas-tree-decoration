import { IState } from '../../types';
import buildValueFilters from '../../builders/controls/value-filters/value-filters';
import buildRangeFilters from '../../builders/controls/range-filters';
import buildSortSection from '../../builders/controls/sort-section';
import buildCards from '../../builders/cards/cards';

const buildToysPageControls = (state: IState): Node => {
  const controlsSection = <HTMLElement>document.createElement('section');
  controlsSection.classList.add('controls');
  controlsSection.append(buildValueFilters(state), buildRangeFilters(state), buildSortSection(state));

  return controlsSection;
};

const buildToysPageContent = (state: IState): HTMLElement => {
  const pageContainer = <HTMLDivElement>document.createElement('div');
  const heading1 = <HTMLHeadingElement>document.createElement('h1');

  const cardsElement = <HTMLElement>document.createElement('section');
  const cardsTitle = <HTMLHeadingElement>document.createElement('h2');
  const cardsList = <HTMLUListElement>document.createElement('ul');

  pageContainer.classList.add('page-container');
  heading1.classList.add('sr-only');
  heading1.textContent = 'Выберите ёлочные игрушки';

  cardsTitle.textContent = 'Карточки игрушек';
  cardsTitle.classList.add('cards__title', 'sr-only');

  cardsList.classList.add('cards__list');
  cardsList.append(...buildCards(state));

  cardsElement.classList.add('cards');
  cardsElement.append(cardsTitle, cardsList);

  pageContainer.append(heading1, buildToysPageControls(state), cardsElement);

  return pageContainer;
};

export default buildToysPageContent;
