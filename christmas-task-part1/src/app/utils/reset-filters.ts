import { IState } from '../app';

const resetFilters = (state: IState) => {
  const valueFilterkeys = Object.keys(state.valueFilter);

  for (const key of valueFilterkeys) {
    const nestedKeys = Object.keys(state.valueFilter[key]);

    for (const nestedKey of nestedKeys) {
      state.valueFilter[key][nestedKey] = false;
    }
  }

  state.rangeFilters.countFilter.min = state.rangeFilters.countFilter.initMin;
  state.rangeFilters.countFilter.max = state.rangeFilters.countFilter.initMax;

  state.rangeFilters.yearFilter.min = state.rangeFilters.yearFilter.initMin;
  state.rangeFilters.yearFilter.max = state.rangeFilters.yearFilter.initMax;
};

export default resetFilters;
