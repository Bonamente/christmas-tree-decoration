import { IToy, Data, data } from './data';

export interface IState {
  searchInput: string;

  valueFilter: {
    shape: {
      ball: boolean;
      bell: boolean;
      cone: boolean;
      snowflake: boolean;
      figurine: boolean;
    };
    color: {
      white: boolean;
      yellow: boolean;
      red: boolean;
      blue: boolean;
      green: boolean;
    };
    size: {
      large: boolean;
      medium: boolean;
      small: boolean;
    };
    favorite: boolean;
  };

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

  filtersReset: boolean;
  settingsReset: boolean;

  toys: Data;
  filteredToys: IToy[] | [];

  favorites: IToy[] | [];
}

export const app = () => {
  const state: IState = {
    searchInput: '',

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
      favorite: false,
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

    sortingType: 'nameAscending', //   'nameDescending', 'yearAscending', 'yearDescending'

    filtersReset: false,
    settingsReset: false,

    toys: data,
    filteredToys: [],

    favorites: [],
  };
};
