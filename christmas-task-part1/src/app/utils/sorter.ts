import { IToy } from '../data';
import { IState } from '../app';

const collator = new Intl.Collator('ru', { caseFirst: 'upper' });
const compareByNameAscending = (a: IToy, b: IToy) => collator.compare(a.name, b.name);
const compareByNameDescending = (a: IToy, b: IToy) => collator.compare(b.name, a.name);

const compareByYearAscending = (a: IToy, b: IToy): number => +a.year - +b.year;
const compareByYearDescending = (a: IToy, b: IToy): number => +b.year - +a.year;

const getSortedItems = (state: IState, items: IToy[]) => {
  const { sortingType } = state;

  switch (sortingType) {
    case 'name-ascending':
      return items.sort(compareByNameAscending);
    case 'name-descending':
      return items.sort(compareByNameDescending);
    case 'year-ascending':
      return items.sort(compareByYearAscending);
    case 'year-descending':
      return items.sort(compareByYearDescending);
    default:
      throw new Error('invalid order parameter value');
  }
};

export default getSortedItems;
