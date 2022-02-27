import { IState } from '../../../types';
import setLocalStorage from '../../../utils/set-local-storage';
import buildHtmlForMediaForm from './htmlForMediaForm';
import runMedia from '../../../utils/media/run-media';

const buildMediaForm = (state: IState): Node => {
  const formElement = <HTMLFormElement>document.createElement('form');
  formElement.innerHTML = buildHtmlForMediaForm(state);
  formElement.classList.add('media-settings__form', 'form');

  formElement.addEventListener('change', (e: Event): void => {
    const { audio, snow, garland } = state.mediaForm;

    const activeElement = e.target as HTMLInputElement;
    const { name } = activeElement;

    state.mediaForm[name] = activeElement.checked;

    runMedia(state, [audio, snow, garland]);
    setLocalStorage(state);
  });

  return formElement;
};

export default buildMediaForm;
