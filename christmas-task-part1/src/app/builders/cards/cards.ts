import { IState } from '../../app';
import buildCard from './card';
import getFilteredItems from '../../utils/filter';
import getSortedItems from '../../utils/sorter';

const buildCards = (state: IState): Node[] => {
  const filtered = getFilteredItems(state);
  const filteredAndSorted = getSortedItems(state, filtered);
  state.filteredAndSortedToys.clear();
  state.filteredAndSortedToys.add(filteredAndSorted);

  if (filteredAndSorted.length === 0) {
    const notificationElement = document.createElement('p');
    notificationElement.textContent = 'Извините, совпадений не обнаружено';

    return [notificationElement];
  }

  return filteredAndSorted.map((item) => buildCard(state, item));
};

export default buildCards;
