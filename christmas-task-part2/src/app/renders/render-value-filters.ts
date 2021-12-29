import { IState } from '../types';
import buildHtmlForFormElement from '../builders/controls/value-filters/form';

const renderValueFilters = (state: IState): void => {
  const formElement = <HTMLFormElement>document.querySelector('.filters__form');
  formElement.innerHTML = buildHtmlForFormElement(state);
};

export default renderValueFilters;
