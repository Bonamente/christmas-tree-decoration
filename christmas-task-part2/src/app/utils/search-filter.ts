import { IToy, IState } from '../types';

const getSearchedItems = (state: IState): IToy[] | [] => {
  const { searchInput, filteredAndSortedToys } = state;
  const items = Array.from(filteredAndSortedToys).flat();

  return items.filter((item) => item.name.toLowerCase().indexOf(searchInput) !== -1);
};

export default getSearchedItems;
