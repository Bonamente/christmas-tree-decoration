export interface IToy {
  id: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export type Data = IToy[];

export interface IValueFilters {
  [key: string]: Record<string, boolean>;
}

export interface IMediaForm {
  [key: string]: boolean;
}

export interface ITreeForm {
  [key: string]: number | string;
}

export interface IState {
  activePage: string;

  searchInput: string;
  uiState: {
    searchedToys: Set<IToy[]>;
  };

  mediaForm: IMediaForm;
  treeForm: ITreeForm;

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

export type Mapping = { [key: string]: string };
