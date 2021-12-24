import { IState } from '../../types';
import buildTreePageSettings from '../../builders/controls/treePageControls/buildTreePageSettings';
import buildDecorationSection from '../../builders/decoration-section';

const buildTreePageContent = (state: IState): HTMLElement => {
  const pageContainer = document.createElement('div');
  const heading1 = document.createElement('h1');

  pageContainer.classList.add('page-container', 'page-container--tree');
  heading1.classList.add('sr-only');
  heading1.textContent = 'Нарядите ёлку';

  pageContainer.append(heading1, buildTreePageSettings(state), buildDecorationSection(state));

  return pageContainer;
};

export default buildTreePageContent;
