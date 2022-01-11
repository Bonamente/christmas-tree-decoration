import toysData from './toysData.json';
import { IState } from './types';
import renderPage from './renders/render-page';

export const favoritesMaxCount = 20;

export const app = () => {
  const state: IState = {
    activePage: 'main-page',

    searchInput: '',
    uiState: {
      searchedToys: new Set(),
    },

    mediaForm: {
      audio: false,
      snow: false,
      garland: false,
    },

    treeForm: {
      tree: '1',
      bg: '1',
      garland: 'multicolored',
    },

    valueFilter: {
      shape: {
        ball: false,
        bell: false,
        cone: false,
        snowflake: false,
        figurine: false,
      },
      color: {
        white: false,
        yellow: false,
        red: false,
        blue: false,
        green: false,
      },
      size: {
        large: false,
        medium: false,
        small: false,
      },

      favorite: {
        favorite: false,
      },
    },

    rangeFilters: {
      countFilter: {
        initMin: 1,
        initMax: 12,
        min: 1,
        max: 12,
      },
      yearFilter: {
        initMin: 1940,
        initMax: 2020,
        min: 1940,
        max: 2020,
      },
    },

    sortingType: 'name-ascending',
    toys: toysData,
    filteredAndSortedToys: new Set(),
    favoritesIds: new Set(),
  };

  const getCurrentState = (): IState => {
    if (localStorage.getItem('savedSettings')) {
      const savedSettings: IState = JSON.parse(localStorage.getItem('savedSettings') || '{}');
      const { activePage, mediaForm, treeForm, valueFilter, rangeFilters, sortingType, favoritesIds } = savedSettings;

      const currentState = {
        ...state,
        activePage,
        mediaForm,
        treeForm,
        valueFilter,
        rangeFilters,
        sortingType,
        favoritesIds: new Set(favoritesIds),
      };

      return currentState;
    }

    return state;
  };

  const currentState = getCurrentState();
  renderPage(currentState);
};
