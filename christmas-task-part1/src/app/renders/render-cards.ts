import { IState } from '../app';
import buildCards from '../builders/cards/cards';

const renderCards = (state: IState): void => {
  const cardsList = document.querySelector('.cards__list') as HTMLElement;
  cardsList.innerHTML = '';
  cardsList.append(...buildCards(state));
};

export default renderCards;
