import { IToy } from './data';
import { IState } from './app';

const collator = new Intl.Collator('ru', { caseFirst: 'upper' });
const compareByNameAscending = (a: IToy, b: IToy) => collator.compare(a.name, b.name);
const compareByNameDescending = (a: IToy, b: IToy) => collator.compare(b.name, a.name);

const compareByYearAscending = (a: IToy, b: IToy): number => +a.year - +b.year;
const compareByYearDescending = (a: IToy, b: IToy): number => +b.year - +a.year;

const getSortedItems = (state: IState) => {
  const { sortingType, filteredAndSortedToys } = state;

  switch (sortingType) {
    case 'nameAscending':
      return filteredAndSortedToys.sort(compareByNameAscending);
    case 'nameDescending':
      return filteredAndSortedToys.sort(compareByNameDescending);
    case 'yearAscending':
      return filteredAndSortedToys.sort(compareByYearAscending);
    case 'yearDescending':
      return filteredAndSortedToys.sort(compareByYearDescending);
    default:
      throw new Error('wrong order parameter value');
  }
};

export default getSortedItems;
