import { IToy } from './data';
import { IState } from './app';

const getSearchedItems = (state: IState): IToy[] | [] => {
  const { searchInput, filteredAndSortedToys } = state;

  return filteredAndSortedToys.filter((item) => item.name.toLowerCase().indexOf(searchInput) !== -1);
};

export default getSearchedItems;
