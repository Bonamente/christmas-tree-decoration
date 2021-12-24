import { IState } from '../types';
import getSearchedItems from '../utils/search-filter';
import renderSearchedCards from '../renders/render-searched-cards';

const buildHeader = (state: IState): Node => {
  const { activePage, favoritesIds } = state;

  const headerElement = document.createElement('header');
  const headerContainer = document.createElement('div');
  const headerNav = document.createElement('nav');
  const MainPageLink = document.createElement('a');
  const ToysPageLink = document.createElement('a');
  const TreePageLink = document.createElement('a');
  const headerControls = document.createElement('div');
  const headerCounter = document.createElement('div');
  const toyCounter = document.createElement('span');

  headerElement.classList.add('header');
  headerContainer.classList.add('header__container');
  headerNav.classList.add('header__nav');

  MainPageLink.classList.add('header__link', 'header__logo');
  MainPageLink.setAttribute('id', 'main-page');

  ToysPageLink.classList.add('header__link');
  ToysPageLink.setAttribute('id', 'toys-page');
  ToysPageLink.setAttribute('href', '#');
  ToysPageLink.textContent = 'игрушки';

  TreePageLink.classList.add('header__link');
  TreePageLink.setAttribute('id', 'tree-page');
  TreePageLink.setAttribute('href', '#');
  TreePageLink.textContent = 'ёлка';

  headerControls.classList.add('header__controls');
  headerCounter.classList.add('header__counter');

  toyCounter.classList.add('toy-counter');
  toyCounter.innerHTML = `${favoritesIds.size}`;

  const pageLinks = [MainPageLink, ToysPageLink, TreePageLink];

  pageLinks.forEach((link) => {
    if (activePage === link.getAttribute('id')) {
      link.classList.add('active-page');
    }

    link.addEventListener('click', (e: Event): void => {
      e.preventDefault();
      const curPage = e.target as HTMLElement;
      // const pageId = curPage.getAttribute("id")
      // if (activePage === pageId) return;

      pageLinks.forEach((item) => item.classList.remove('active-page'));
      curPage.classList.add('active-page');

      // TODO routing
    });
  });

  headerNav.append(...pageLinks);
  headerContainer.append(headerNav);
  headerCounter.append(toyCounter);

  if (activePage === 'toys-page') {
    const headerSearchInput = document.createElement('input');

    headerSearchInput.classList.add('header__search', 'header__search--stand-by');
    headerSearchInput.setAttribute('type', 'search');
    headerSearchInput.setAttribute('autocomplete', 'off');
    headerSearchInput.setAttribute('placeholder', 'найти игрушку...');
    headerSearchInput.setAttribute('autofocus', 'autofocus');

    headerSearchInput.addEventListener('input', (): void => {
      headerSearchInput.classList.remove('header__search--stand-by');

      state.searchInput = headerSearchInput.value.toLowerCase();
      state.uiState.searchedToys.clear();
      state.uiState.searchedToys.add(getSearchedItems(state));

      if (headerSearchInput.value === '') {
        headerSearchInput.classList.add('header__search--stand-by');
      }

      renderSearchedCards(state);
    });

    headerControls.append(headerSearchInput, headerCounter);
  } else {
    headerControls.append(headerCounter);
  }

  headerContainer.append(headerControls);
  headerElement.append(headerContainer);

  return headerElement;
};

export default buildHeader;
