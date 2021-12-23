import { IState } from '../../../types'; 
import buildTreeForm from './tree-form';
import buildMediaForm from './media-form';

const buildTreePageSettings = (state: IState): Node => {
  const settingsSection = document.createElement('section');
  const settingsSectionTitle = document.createElement('h2');
  const mediaSettings = document.createElement('section');
  const mediaSettingsTitle = document.createElement('h3');
  const treeSettings = document.createElement('section');
  const treeSettingsTitle = document.createElement('h3');
  const settingsButtonContainer = document.createElement('div');
  const resetSettingsBtn = document.createElement('button');
  
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
    //TODO logic

    // localStorage.clear();

    // resetFilters(state);
    // state.searchInput = '';
    // state.favoritesIds.clear();
    // state.sortingType = 'name-ascending';

    // renderPage(state);
  });

  settingsButtonContainer.append(resetSettingsBtn);
  mediaSettings.append(mediaSettingsTitle, buildMediaForm(state));
  treeSettings.append(treeSettingsTitle, buildTreeForm(state));
  settingsSection.append(settingsSectionTitle, mediaSettings, treeSettings, settingsButtonContainer);

  return settingsSection;
};

export default buildTreePageSettings;