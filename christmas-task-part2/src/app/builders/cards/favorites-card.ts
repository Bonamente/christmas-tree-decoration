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
    image.addEventListener('mousedown', (e) => {
      const draggableElement = <HTMLImageElement>e.target;      
      const target = <HTMLElement>document.querySelector('area');
      const decorationSection = <HTMLElement>document.querySelector('.decoration');  

      if (image.parentNode !== decorationSection) {
        parentTarget = image.parentNode as HTMLElement;
        countElement = parentTarget.querySelector('.fav-card__count') as HTMLElement;       
      } 

      draggableElement.addEventListener('dragstart', (e) => {
        const { id } = <HTMLElement>e.target;
        e.dataTransfer!.setData('text', id);
      });

      [target, parentTarget].forEach((item) => item.addEventListener('dragover', (e) => {
        e.preventDefault();
      }));

      target.addEventListener('drop', (e) => {
        if (e.type !== 'drop') return;

        const draggedId = e.dataTransfer!.getData('text');
        const draggableElement = <HTMLElement>document.getElementById(draggedId);

        if (draggableElement.parentNode == target) return;

        draggableElement.style.top = `${e.pageY - draggableElement.offsetHeight * 2}px`;     
        draggableElement.style.left = `${e.pageX - draggableElement.offsetWidth * 8.8}px`; //TODO remove magic numbers 
        
        draggableElement.parentNode!.removeChild(draggableElement);
        decorationSection.appendChild(draggableElement);
        
        countElement.textContent = `${parentTarget.childElementCount - 1}`;
      }); 

      parentTarget.addEventListener('drop', (e) => {
        if (e.type !== 'drop') return;

        const draggedId = e.dataTransfer!.getData('text');
        const draggableElement = <HTMLElement>document.getElementById(draggedId);      
        const [parentElementId] = draggedId.split('-');    

        if (parentElementId !== parentTarget.dataset.num) return;       

        draggableElement.style.top = '';      
        draggableElement.style.left = ''
        
        draggableElement.parentNode!.removeChild(draggableElement);
        parentTarget.appendChild(draggableElement);
        countElement.textContent = `${parentTarget.childElementCount - 1}`;
      });
    });
  });

  cardElement.append(cardCountElement, ...imageElements);

  return cardElement;
};

export default buildFavoritesCard;
