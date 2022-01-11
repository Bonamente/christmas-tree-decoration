import { IState } from '../../../types';
import setLocalStorage from '../../../utils/set-local-storage';
import buildHtmlForTreePageForm from './htmlForTreeForm';
import changeDecorations from '../../../utils/decoration/change-decorations';

const buildTreeForm = (state: IState): Node => {
  const formElement = <HTMLFormElement>document.createElement('form');
  formElement.innerHTML = buildHtmlForTreePageForm(state);
  formElement.classList.add('tree-settings__form', 'form');

  formElement.addEventListener('change', (e: Event): void => {
    const activeElement = e.target as HTMLInputElement;
    const { name } = activeElement;

    state.treeForm[name] = activeElement.value;

    changeDecorations(state);
    setLocalStorage(state);
  });

  return formElement;
};

export default buildTreeForm;
