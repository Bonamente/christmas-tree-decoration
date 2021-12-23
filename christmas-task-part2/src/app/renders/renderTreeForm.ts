import { IState } from '../types';
import buildHtmlForTreeForm from '../builders/controls/treePageControls/htmlForTreeForm';

const renderTreeForm = (state: IState): void => {
  const formElement = document.querySelector('.tree-settings__form') as HTMLElement;
  formElement.innerHTML = buildHtmlForTreeForm(state);
};

export default renderTreeForm;