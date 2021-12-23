import { IState, IMediaForm } from '../../../types';
import setLocalStorage from '../../../utils/set-local-storage';
import buildHtmlForMediaForm from './htmlForMediaForm';
import renderMediaForm from '../../../renders/renderMediaForm';

const buildMediaForm = (state: IState): Node => {
  const formElement = document.createElement('form');
  formElement.innerHTML = buildHtmlForMediaForm(state);
  formElement.classList.add('media-settings__form', 'form');

  formElement.addEventListener('change', (e: Event): void => {
    const activeElement = e.target as HTMLInputElement;
    const { name } = activeElement;
  
    if (activeElement.checked) {
      state.mediaForm[name] = true;
    } else {
      state.mediaForm[name] = false;
    }

   
    renderMediaForm(state);
    //TODO 
    // runMedia(state);
    // setLocalStorage(state);   
  });

  
  return formElement;
};

export default buildMediaForm;