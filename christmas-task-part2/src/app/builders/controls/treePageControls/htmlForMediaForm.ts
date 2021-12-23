import { IState } from '../../../types';

const buildHtmlForMediaForm = (state: IState): string => {
  const { mediaForm } = state;  

  return `
    <fieldset class="form__media media-form">
    <div class="media-form__inner-wrapper">
      <legend class="media-form__title sr-only">Настройки мультимедиа</legend>
      <ul class="media-form__list">
        <li class="media-form__item">
          <input class="media-form__input sr-only" id="audio" type="checkbox" name="audio" 
          ${mediaForm.audio ? 'checked' : ''}>
          <label class="media-form__label media-form__label--audio" for="audio">
          <span class="sr-only">Включить/выключить музыку</span></label>
        </li>
        <li class="media-form__item">
          <input class="media-form__input sr-only" id="snow" type="checkbox" name="snow" 
          ${mediaForm.snow ? 'checked' : ''}>
          <label class="media-form__label media-form__label--snow" for="snow">
          <span class="sr-only">Включить/выключить падающий снег</span></label>
        </li>
        <li class="media-form__item">
          <input class="media-form__input sr-only" id="garland" type="checkbox" name="garland" 
          ${mediaForm.garland ? 'checked' : ''}>
          <label class="media-form__label media-form__label--garland" for="garland">
          <span class="sr-only">Включить/выключить гирлянду</span></label>
        </li>
      </ul>
    </div>
  </fieldset>`;
};

export default buildHtmlForMediaForm;
