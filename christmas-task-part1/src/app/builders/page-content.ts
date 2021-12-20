import { IState } from '../app';
import buildToysPageContent from '../pages/toys-page/toys-page';

const buildPageContent = (state: IState): Node => {
  const { activePage } = state;

  const mainElement = document.createElement('main');
  const overlayElement = document.createElement('div');

  mainElement.classList.add('main');
  overlayElement.classList.add('overlay');

  let activePageContent: HTMLElement;

  switch (activePage) {
    case 'main-page':
      activePageContent = buildToysPageContent(state); //TODO replace with buildMainPageContent();
      break;
    case 'toys-page':
      activePageContent = buildToysPageContent(state);
      break;
    case 'tree-page':
      activePageContent = buildToysPageContent(state); //TODO replace with buildTreePageContent();
      break;
    default:
      throw new Error('invalid activePage value');
  }

  overlayElement.append(activePageContent);
  mainElement.append(overlayElement);

  return mainElement;
};

export default buildPageContent;
