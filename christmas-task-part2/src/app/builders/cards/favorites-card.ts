import { IState } from '../../types';

const getImageElements = (id: number, count: number): Node[] => {
  const imageElements = [];

  for (let i = count; i > 0; i -= 1) {
    const imgElement = <HTMLImageElement>document.createElement('img');
    imgElement.classList.add('fav-card__img');
    imgElement.src = `./toys/${id}.png`;
    imgElement.alt = 'toy';
    imgElement.draggable = true;
    imgElement.id = `${id}-${i}`;

    imageElements.push(imgElement);
  }

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
    image.addEventListener('mousedown', (e: Event) => {
      const draggableElement = <HTMLImageElement>e.target;
      const target = <HTMLElement>document.querySelector('area');
      const decorationSection = <HTMLElement>document.querySelector('.decoration');

      if (image.parentNode !== decorationSection) {
        parentTarget = image.parentNode as HTMLElement;
        countElement = parentTarget.querySelector('.fav-card__count') as HTMLElement;
      }

      draggableElement.addEventListener('dragstart', (ev: DragEvent) => {
        const { id } = <HTMLElement>e.target;
        ev.dataTransfer?.setData('text', id);
      });

      [target, parentTarget].forEach((item) =>
        item.addEventListener('dragover', (evt: DragEvent) => {
          evt.preventDefault();
        })
      );

      target.addEventListener('drop', (evnt: DragEvent) => {
        if (evnt.type !== 'drop') return;

        const draggedId = evnt.dataTransfer!.getData('text');
        const dragElement = <HTMLElement>document.getElementById(draggedId);

        if (dragElement.parentNode == target) return;

        const rect = decorationSection.getBoundingClientRect();
        const [X, Y] = [evnt.pageX - rect.left, evnt.pageY - (rect.top + window.scrollY)];

        dragElement.style.top = `${Y - dragElement.offsetHeight / 2}px`;
        dragElement.style.left = `${X - dragElement.offsetWidth / 2}px`;

        dragElement.parentNode?.removeChild(dragElement);
        decorationSection.appendChild(dragElement);

        countElement.textContent = `${parentTarget.childElementCount - 1}`;
      });

      parentTarget.addEventListener('drop', (event: DragEvent) => {
        if (event.type !== 'drop') return;

        const draggedId = event.dataTransfer!.getData('text');
        const draggableEl = <HTMLElement>document.getElementById(draggedId);
        const [parentElementId] = draggedId.split('-');

        if (parentElementId !== parentTarget.dataset.num) return;

        draggableEl.style.top = '';
        draggableEl.style.left = '';

        draggableEl.parentNode?.removeChild(draggableEl);
        parentTarget.appendChild(draggableEl);
        countElement.textContent = `${parentTarget.childElementCount - 1}`;
      });
    });
  });

  cardElement.append(cardCountElement, ...imageElements);

  return cardElement;
};

export default buildFavoritesCard;
