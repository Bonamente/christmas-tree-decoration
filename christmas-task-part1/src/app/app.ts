import { IToy, Data, data } from './data';
import renderPage from './renders/page-render';

import createCountSLider from './sliders/count-slider';
import createYearSlider from './sliders/year-slider';

interface IValueFilters {
  [key: string]: Record<string, boolean>;
}

export interface IState {
  activePage: string;

  searchInput: string;
  uiState: {
    searchedToys: Set<IToy[]>;
  };

  valueFilter: IValueFilters;

  rangeFilters: {
    countFilter: {
      initMin: number;
      initMax: number;
      min: number;
      max: number;
    };
    yearFilter: {
      initMin: number;
      initMax: number;
      min: number;
      max: number;
    };
  };

  sortingType: string;
  toys: Data;
  filteredAndSortedToys: Set<IToy[]>;
  favoritesIds: Set<number>;
}

export const favoritesMaxCount = 20;

export const app = () => {
  const state: IState = {
    activePage: 'toys-page', //'main-page', 'tree-page'

    searchInput: '',
    uiState: {
      searchedToys: new Set(),
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
    toys: [...data],
    filteredAndSortedToys: new Set(),
    favoritesIds: new Set(),
  };

  const getCurrentState = (): IState => {
    if (localStorage.getItem('savedSettings')) {
      const savedSettings: IState = JSON.parse(localStorage.getItem('savedSettings') || '{}');
      const { valueFilter, rangeFilters, sortingType, favoritesIds } = savedSettings;

      const currentState = {
        ...state,
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
  createCountSLider(currentState);
  createYearSlider(currentState);
};
