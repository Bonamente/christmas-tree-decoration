import { IToy, IState } from '../../types';
import { favoritesMaxCount } from '../../app';
import setLocalStorage from '../../utils/set-local-storage';

const buildCard = (state: IState, toy: IToy): Node => {
  const { favoritesIds } = state;
  const { id, name, count, year, shape, color, size, favorite } = toy;

  const cardElement = <HTMLLIElement>document.createElement('li');
  cardElement.classList.add('cards__item', 'card');
  cardElement.setAttribute('tabindex', '0');
  cardElement.dataset.num = `${id}`;

  if (favoritesIds.has(id)) {
    cardElement.classList.add('active');
  }

  cardElement.innerHTML = ` 
    <h3 class="card__title">${name}</h3>
    <img class="card__img" src="./toys/${id}.png" alt="toy">
    <div class="card__description">      
      <p class="card__count">Количество:<span>${count}</span></p>
      <p class="card__year">Год покупки:<span>${year}</span></p>
      <p class="card__shape">Форма:<span>${shape}</span></p>
      <p class="card__color">Цвет:<span>${color}</span></p>
      <p class="card__size">Размер:<span>${size}</span></p>
      <p class="card__favorite">Любимая:<span>${favorite ? 'да' : 'нет'}</span></p>
    </div>
    <div class="card__ribbon"></div>    
  `;

  cardElement.addEventListener('click', (): void => {
    const cardId = Number(cardElement.dataset.num);
    const toyCounterElement = <HTMLSpanElement>document.querySelector('.toy-counter');

    if (favoritesIds.has(cardId)) {
      favoritesIds.delete(cardId);
    } else if (favoritesIds.size >= favoritesMaxCount) {
      cardElement.classList.toggle('active');
      cardElement.classList.toggle('count-exceeded');
    } else {
      favoritesIds.add(cardId);
    }

    setLocalStorage(state);

    toyCounterElement.textContent = `${favoritesIds.size}`;
    cardElement.classList.toggle('active');
  });

  cardElement.addEventListener('blur', (): void => {
    cardElement.classList.remove('count-exceeded');
  });

  return cardElement;
};

export default buildCard;
