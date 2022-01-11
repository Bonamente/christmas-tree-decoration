import { IState } from '../types';
import buildCards from '../builders/cards/cards';

const renderCards = (state: IState): void => {
  const cardsList = <HTMLUListElement>document.querySelector('.cards__list');
  cardsList.innerHTML = '';
  cardsList.append(...buildCards(state));
};

export default renderCards;
