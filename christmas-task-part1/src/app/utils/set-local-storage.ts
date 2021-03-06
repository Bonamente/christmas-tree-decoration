import { IState } from '../types';

const setLocalStorage = (currentState: IState): void => {
  const { activePage, mediaForm, treeForm, valueFilter, rangeFilters, sortingType, favoritesIds } = currentState;

  const savedSettings = {
    activePage,
    mediaForm,
    treeForm,
    valueFilter,
    rangeFilters,
    sortingType,
    favoritesIds: Array.from(favoritesIds),
  };

  localStorage.setItem('savedSettings', JSON.stringify(savedSettings));
};

export default setLocalStorage;
