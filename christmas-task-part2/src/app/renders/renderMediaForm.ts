import { IState } from '../types';
import buildHtmlForMediaForm from '../builders/controls/treePageControls/htmlForMediaForm';

const renderMediaForm = (state: IState): void => {
  const formElement = document.querySelector('.media-settings__form') as HTMLElement;
  formElement.innerHTML = buildHtmlForMediaForm(state);
};

export default renderMediaForm;