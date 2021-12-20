import { IState } from '../app';

const setLocalStorage = (currentState: IState): void => {
  const { valueFilter, rangeFilters, sortingType, favoritesIds } = currentState;
  const savedSettings = { valueFilter, rangeFilters, sortingType, favoritesIds: Array.from(favoritesIds) };
  localStorage.setItem('savedSettings', JSON.stringify(savedSettings));  
};


export default setLocalStorage;