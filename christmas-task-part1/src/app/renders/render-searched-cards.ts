import { IState } from '../types';
import buildCard from '../builders/cards/card';

const renderSearchedCards = (state: IState): void => {
  const headerControls = document.querySelector('.header__controls') as HTMLElement;
  const cardsList = document.querySelector('.cards__list') as HTMLElement;

  const cardsData = Array.from(state.uiState.searchedToys).flat();
  const cards = cardsData.map((item) => buildCard(state, item));

  if (cards.length === 0) {
    headerControls.classList.add('header__controls--no-matches');
    cardsList.innerHTML = '';
    return;
  }

  headerControls.classList.remove('header__controls--no-matches');
  cardsList.innerHTML = '';
  cardsList.append(...cards);
};

export default renderSearchedCards;
