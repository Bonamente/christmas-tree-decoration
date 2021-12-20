import { IState } from '../../../app';

const buildHtmlForFormElement = (state: IState): string => {
  const { valueFilter } = state;
  const { shape, color, size, favorite } = valueFilter;

  return `  
  <fieldset class="form__shape shape-form">
    <div class="form__inner-wrapper">
      <legend class="shape-form__title">Форма:</legend>
      <ul class="shape-form__list">
        <li class="shape-form__item">
          <input class="shape-form__input sr-only" id="ball" type="checkbox" name="shape-ball" 
          ${shape.ball ? 'checked' : ''}>
          <label class="shape-form__label shape-form__label--ball" for="ball">
          <span class="sr-only">Шар</span></label>
        </li>
        <li class="shape-form__item">
          <input class="shape-form__input sr-only" id="bell" type="checkbox" name="shape-bell" 
          ${shape.bell ? 'checked' : ''}>
          <label class="shape-form__label shape-form__label--bell" for="bell">
          <span class="sr-only">Колокольчик</span></label>
        </li>
        <li class="shape-form__item">
          <input class="shape-form__input sr-only" id="cone" type="checkbox" name="shape-cone" 
          ${shape.cone ? 'checked' : ''}>
          <label class="shape-form__label shape-form__label--cone" for="cone">
          <span class="sr-only">Шишка</span></label>
        </li>
        <li class="shape-form__item">
          <input class="shape-form__input sr-only" id="snowflake" type="checkbox" 
          name="shape-snowflake" ${shape.snowflake ? 'checked' : ''}>
          <label class="shape-form__label shape-form__label--snowflake" for="snowflake">
          <span class="sr-only">Снежинка</span></label>
        </li>
        <li class="shape-form__item">
          <input class="shape-form__input sr-only" id="figurine" type="checkbox" 
          name="shape-figurine" ${shape.figurine ? 'checked' : ''}>
          <label class="shape-form__label shape-form__label--figurine"  for="figurine">
          <span class="sr-only">Фигурка</span></label>
        </li>
      </ul>
    </div>            
  </fieldset>

  <fieldset class="form__color color-form">
    <div class="form__inner-wrapper">
      <legend class="color-form__title">Цвет:</legend>
      <ul class="color-form__list">
        <li class="color-form__item">
          <input class="color-form__input sr-only" id="white" type="checkbox" 
          name="color-white" ${color.white ? 'checked' : ''}>
          <label class="color-form__label color-form__label--white" for="white">
          <span class="sr-only">Белый</span></label>
        </li>
        <li class="color-form__item">
          <input class="color-form__input sr-only" id="yellow" type="checkbox" 
          name="color-yellow" ${color.yellow ? 'checked' : ''}>
          <label class="color-form__label color-form__label--yellow" for="yellow">
          <span class="sr-only">Жёлтый</span></label>
        </li>
        <li class="color-form__item">
          <input class="color-form__input sr-only" id="red" type="checkbox" 
          name="color-red" ${color.red ? 'checked' : ''}>
          <label class="color-form__label color-form__label--red" for="red">
          <span class="sr-only">Красный</span></label>
        </li>
        <li class="color-form__item">
          <input class="color-form__input sr-only" id="blue" type="checkbox" 
          name="color-blue" ${color.blue ? 'checked' : ''}>
          <label class="color-form__label color-form__label--blue" for="blue">
          <span class="sr-only">Синий</span></label>
        </li>
        <li class="color-form__item">
          <input class="color-form__input sr-only" id="green" type="checkbox" 
          name="color-green" ${color.green ? 'checked' : ''}>
          <label class="color-form__label color-form__label--green" for="green">
          <span class="sr-only">Зелёный</span> </label>
        </li>     
      </ul>
    </div>
  </fieldset>

  <fieldset class="form__size size-form">
    <div class="form__inner-wrapper">
      <legend class="size-form__title">Размер:</legend>
      <ul class="size-form__list">
        <li class="size-form__item">
          <input class="size-form__input sr-only" id="large" type="checkbox" 
          name="size-large" ${size.large ? 'checked' : ''}>
          <label class="size-form__label size-form__label--large" for="large">
          <span class="sr-only">Большой</span></label>
        </li>
        <li class="size-form__item">
          <input class="size-form__input sr-only" id="medium" type="checkbox" 
          name="size-medium" ${size.medium ? 'checked' : ''}>
          <label class="size-form__label size-form__label--medium" for="medium">
          <span class="sr-only">Средний</span></label>
        </li>          
        <li class="size-form__item">
          <input class="size-form__input sr-only" id="small" type="checkbox" 
          name="size-small" ${size.small ? 'checked' : ''}>
          <label class="size-form__label size-form__label--small" for="small">
          <span class="sr-only">Малый</span></label>
        </li>  
      </ul>
    </div>
  </fieldset>

  <fieldset class="form__favorite fav-form">
    <div class="form__inner-wrapper">
      <legend class="fav-form__title">Только любимые:</legend>
      <input class="fav-form__input sr-only" id="only-favorite" type="checkbox" 
      name="favorite-favorite" ${favorite.favorite ? 'checked' : ''}>
      <label class="fav-form__label" for="only-favorite" class="favorite-input-label">
      <span class="sr-only">Выбрать только любимые игрушки</span></label>                
    </div>              
  </fieldset>`;
};

export default buildHtmlForFormElement;
