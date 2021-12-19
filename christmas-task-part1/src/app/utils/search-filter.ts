import { IState } from '../app';

const getSearchedItems = (state: IState) => {
  const { searchInput, filteredAndSortedToys } = state;
  const items = Array.from(filteredAndSortedToys).flat();

  return items.filter((item) => item.name.toLowerCase().indexOf(searchInput) !== -1);
};

export default getSearchedItems;
