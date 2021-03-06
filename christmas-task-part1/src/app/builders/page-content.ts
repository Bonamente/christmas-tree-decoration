import { IState } from '../types';
import buildMainPageContent from '../pages/main-page/main-page';
import buildToysPageContent from '../pages/toys-page/toys-page';
import buildTreePageContent from '../pages/tree-page/tree-page';

const buildPageContent = (state: IState): Node => {
  const { activePage } = state;

  const mainElement = <HTMLElement>document.createElement('main');
  const overlayElement = <HTMLDivElement>document.createElement('div');

  mainElement.classList.add('main');
  overlayElement.classList.add('overlay');

  let activePageContent: HTMLElement;

  switch (activePage) {
    case 'main-page':
      activePageContent = buildMainPageContent(state);
      break;
    case 'toys-page':
      activePageContent = buildToysPageContent(state);
      break;
    case 'tree-page':
      activePageContent = buildTreePageContent(state);
      break;
    default:
      throw new Error('invalid activePage value');
  }

  overlayElement.append(activePageContent);
  mainElement.append(overlayElement);

  return mainElement;
};

export default buildPageContent;
