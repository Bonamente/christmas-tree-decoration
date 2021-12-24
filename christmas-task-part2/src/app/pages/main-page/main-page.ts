import { IState } from '../../types';
import renderPage from '../../renders/render-page';

const buildMainPageContent = (state: IState): HTMLElement => {
  const pageContainer = document.createElement('div');
  const startButton = document.createElement('a');

  pageContainer.classList.add('page-container', 'page-container--main-page');
  pageContainer.innerHTML = `
  <div class="main-page__image main-page__image--ball-1"></div>
  <div class="main-page__image main-page__image--ball-2 ball2"></div>
  <h1 class="main-page__title">Новогодняя игра<span>«Наряди ёлку»</span></h1> 
  `;

  startButton.textContent = 'Начать';
  startButton.setAttribute('href', '');
  startButton.classList.add('main-page__start-button');

  startButton.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    state.activePage = 'toys-page';
    renderPage(state);
  });

  pageContainer.append(startButton);

  return pageContainer;
};

export default buildMainPageContent;
