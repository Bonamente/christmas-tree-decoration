import { IState } from '../../types';
import buildFavoritesCard from './favorites-card';

const buildFavoritesCards = (state: IState): Node[] => {
  const { favoritesIds } = state;
  const favorites = favoritesIds.size > 0 ? [...favoritesIds] : [...Array(20).keys()].map((i) => i + 1); 

  return favorites.map((idx) => buildFavoritesCard(state, idx));
};

export default buildFavoritesCards;
