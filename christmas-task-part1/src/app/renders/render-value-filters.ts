import { IState } from '../app';
import buildHtmlForFormElement from '../builders/controls/value-filters/form';

const renderValueFilters = (state: IState): void => {
  const formElement = document.querySelector('.filters__form') as HTMLElement;
  formElement.innerHTML = buildHtmlForFormElement(state);
};

export default renderValueFilters;
