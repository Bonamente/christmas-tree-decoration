import { IState } from '../../../types';
import setLocalStorage from '../../../utils/set-local-storage';
import buildHtmlForMediaForm from './htmlForMediaForm';
// import renderMediaForm from '../../../renders/renderMediaForm';
import runMedia from '../../../utils/media/run-media';

const buildMediaForm = (state: IState): Node => {
  const formElement = document.createElement('form');
  formElement.innerHTML = buildHtmlForMediaForm(state);
  formElement.classList.add('media-settings__form', 'form');

  formElement.addEventListener('change', (e: Event): void => {
    const { audio, snow, garland } = state.mediaForm;

    const activeElement = e.target as HTMLInputElement;
    const { name } = activeElement;

    if (activeElement.checked) {
      state.mediaForm[name] = true;
    } else {
      state.mediaForm[name] = false;
    }

    runMedia(state, [audio, snow, garland]);   
    setLocalStorage(state);  
  });

  return formElement;
};

export default buildMediaForm;
