import { IState } from '../../types';

const getImageElements = (id: number, count: number): Node[] => {
  const imageElements = Array(count)
    .fill(0)
    .map((_el, i) => {
      const imgElement = new Image();
      imgElement.classList.add('fav-card__img');
      imgElement.src = `./toys/${id}.png`;
      imgElement.alt = 'toy';
      imgElement.draggable = true;
      imgElement.id = `${id}-${i}`;

      return imgElement;
    });

  return imageElements;
};

const buildFavoritesCard = (state: IState, idx: number): Node => {
  const { toys } = state;
  const [toy] = toys.filter((item) => item.id === idx);
  const { count } = toy;

  const cardElement = <HTMLDivElement>document.createElement('div');
  cardElement.classList.add('favorites__card', 'fav-card');
  cardElement.setAttribute('tabindex', '0');
  cardElement.dataset.num = `${idx}`;

  const cardCountElement = <HTMLDivElement>document.createElement('div');
  cardCountElement.textContent = `${count}`;
  cardCountElement.classList.add('fav-card__count');

  const imageElements = getImageElements(idx, count);

  let parentTarget: HTMLElement;
  let countElement: HTMLElement;

  imageElements.forEach((image) => {
    image.addEventListener('mousedown', (e: Event): void => {
      const draggableElement = <HTMLImageElement>e.target;
      const target = <HTMLElement>document.querySelector('area');
      const decorationSection = <HTMLElement>document.querySelector('.decoration');

      if (image.parentNode !== decorationSection) {
        parentTarget = <HTMLDivElement>image.parentNode;
        countElement = <HTMLDivElement>parentTarget.querySelector('.fav-card__count');
      }

      draggableElement.addEventListener('dragstart', (ev: DragEvent): void => {
        const { id } = <HTMLElement>ev.target;
        ev.dataTransfer?.setData('text', id);
      });

      draggableElement.addEventListener('dragend', (evt): void => {
        draggableElement.hidden = true;
        const elemBelow = document.elementFromPoint(evt.clientX, evt.clientY);
        draggableElement.hidden = false;

        if (elemBelow !== draggableElement) {
          draggableElement.style.top = '';
          draggableElement.style.left = '';

          draggableElement.parentNode?.removeChild(draggableElement);
          parentTarget.appendChild(draggableElement);
          countElement.textContent = `${parentTarget.childElementCount - 1}`;
        }
      });

      target.addEventListener('dragover', (evnt: DragEvent): void => {
        evnt.preventDefault();
      });

      target.addEventListener('drop', (event: DragEvent): void => {
        if (event.type !== 'drop') return;

        const draggedId = event.dataTransfer!.getData('text');
        const dragElement = <HTMLElement>document.getElementById(draggedId);

        if (dragElement.parentNode == target) return;

        const rect = decorationSection.getBoundingClientRect();
        const [X, Y] = [event.pageX - rect.left, event.pageY - (rect.top + window.scrollY)];

        dragElement.style.top = `${Y - dragElement.offsetHeight / 2}px`;
        dragElement.style.left = `${X - dragElement.offsetWidth / 2}px`;

        dragElement.parentNode?.removeChild(dragElement);
        decorationSection.appendChild(dragElement);

        countElement.textContent = `${parentTarget.childElementCount - 1}`;
      });
    });
  });

  cardElement.append(cardCountElement, ...imageElements);

  return cardElement;
};

export default buildFavoritesCard;
