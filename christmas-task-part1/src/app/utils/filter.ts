import { IToy } from '../data';
import { Data } from '../data';
import { IState } from '../app';

type Mapping = { [key: string]: string };

const mapping: Mapping = {
  шар: 'ball',
  колокольчик: 'bell',
  шишка: 'cone',
  снежинка: 'snowflake',
  фигурка: 'figurine',
  белый: 'white',
  желтый: 'yellow',
  красный: 'red',
  синий: 'blue',
  зелёный: 'green',
  большой: 'large',
  средний: 'medium',
  малый: 'small',
};

const filterByType = (query: { [key: string]: boolean }, items: Data, type: keyof IToy): IToy[] | [] => {
  const fields = Object.keys(query);
  const activeFields = fields.filter((field) => query[field]);

  if (activeFields.length === 0) return items;
  return items.filter((item) => activeFields.includes(mapping[String(item[type])]));
};

const filterByRange = (query: { [key: string]: number }, items: Data, key: keyof IToy): IToy[] | [] => {
  const { initMin, initMax, min, max } = query;

  if (initMin === min && initMax === max) return items;
  return items.filter((item) => min <= item[key] && item[key] <= max);
};

const getFilteredItems = (state: IState) => {
  const { toys } = state;
  const { shape, color, size, favorite } = state.valueFilter;
  const { countFilter, yearFilter } = state.rangeFilters;

  const filteredByShape = filterByType(shape, toys, 'shape');
  const filteredByColor = filterByType(color, filteredByShape, 'color');
  const filteredBySize = filterByType(size, filteredByColor, 'size');
  const filteredByCount = filterByRange(countFilter, filteredBySize, 'count');
  const filteredByYear = filterByRange(yearFilter, filteredByCount, 'year');

  return favorite.favorite ? filteredByYear.filter((item) => item.favorite) : filteredByYear;
};

export default getFilteredItems;
