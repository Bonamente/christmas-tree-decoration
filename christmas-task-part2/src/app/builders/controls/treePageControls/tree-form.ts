import { IState, ITreeForm } from '../../../types';
import setLocalStorage from '../../../utils/set-local-storage';
import buildHtmlForTreePageForm from './htmlForTreeForm';
import renderTreeForm from '../../../renders/renderTreeForm';

const buildTreeForm = (state: IState): Node => { 
  const formElement = document.createElement('form');
  formElement.innerHTML = buildHtmlForTreePageForm(state);
  formElement.classList.add('tree-settings__form', 'form');

  formElement.addEventListener('change', (e: Event): void => {
    const activeElement = e.target as HTMLInputElement;
    const { name } = activeElement;   

    const currentValue = name === 'garland' 
      ? activeElement.value
      : Number(activeElement.value);
      
      state.treeForm[name] = currentValue;

      // renderTreeForm(state); фокус не срабатывает с клавиатурф потому что ререндер?

      //TODO 
      // setLocalStorage(state);
  }); 

  return formElement;
};

export default buildTreeForm;