import { IState } from '../types';
import buildFavoritesCards from './cards/favorites-cards';

const buildFavoritesSection = (state: IState): Node => {
  const favoritesSection = <HTMLElement>document.createElement('section');
  const favoritesSectionTitle = <HTMLHeadingElement>document.createElement('h2');
  const favoritesCards = <HTMLDivElement>document.createElement('div');

  favoritesSection.classList.add('favorites');

  favoritesSectionTitle.textContent = 'Игрушки';
  favoritesSectionTitle.classList.add('favorites__title');

  favoritesCards.classList.add('favorites__cards');
  favoritesCards.append(...buildFavoritesCards(state));

  favoritesSection.append(favoritesSectionTitle, favoritesCards);

  return favoritesSection;
};

export default buildFavoritesSection;
