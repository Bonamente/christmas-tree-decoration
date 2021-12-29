import { IState } from '../../../types';
import buildTreeForm from './tree-form';
import buildMediaForm from './media-form';
import renderPage from '../../../renders/render-page';
import makeSnow from '../../../utils/media/make-snow';
import playMusic from '../../../utils/media/play-music';

const buildTreePageSettings = (state: IState): Node => {
  const settingsSection = <HTMLElement>document.createElement('section');
  const settingsSectionTitle = <HTMLHeadingElement>document.createElement('h2');
  const mediaSettings = <HTMLElement>document.createElement('section');
  const mediaSettingsTitle = <HTMLHeadingElement>document.createElement('h3');
  const treeSettings = <HTMLElement>document.createElement('section');
  const treeSettingsTitle = <HTMLHeadingElement>document.createElement('h3');
  const settingsButtonContainer = <HTMLDivElement>document.createElement('div');
  const resetSettingsBtn = <HTMLButtonElement>document.createElement('button');

  settingsSection.classList.add('settings');
  settingsSectionTitle.textContent = 'Настройки';
  settingsSectionTitle.classList.add('settings__title', 'sr-only');

  mediaSettings.classList.add('settings__media-settings', 'media-settings');
  mediaSettingsTitle.textContent = 'Настройки медиа';
  mediaSettingsTitle.classList.add('media-settings__title', 'sr-only');

  treeSettings.classList.add('settings__tree-settings', 'tree-settings');
  treeSettingsTitle.textContent = 'Настройки ёлки';
  treeSettingsTitle.classList.add('tree-settings__title', 'sr-only');

  settingsButtonContainer.classList.add('settings__btn-container');
  resetSettingsBtn.classList.add('settings__reset-btn');
  resetSettingsBtn.textContent = 'Сброс настроек';

  resetSettingsBtn.addEventListener('click', (): void => {
    localStorage.clear();
    makeSnow(false);
    playMusic(false);

    state.mediaForm.audio = false;
    state.mediaForm.snow = false;
    state.mediaForm.garland = false;
    state.treeForm.tree = '1';
    state.treeForm.bg = '1';
    state.treeForm.garland = 'multicolored';

    renderPage(state);
  });

  settingsButtonContainer.append(resetSettingsBtn);
  mediaSettings.append(mediaSettingsTitle, buildMediaForm(state));
  treeSettings.append(treeSettingsTitle, buildTreeForm(state));
  settingsSection.append(settingsSectionTitle, mediaSettings, treeSettings, settingsButtonContainer);

  return settingsSection;
};

export default buildTreePageSettings;
