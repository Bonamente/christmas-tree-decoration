import { IState } from '../../../types';

const buildHtmlForTreeForm = (state: IState): string => {
  const { treeForm } = state;
  const { tree, bg, garland } = treeForm;

  return `    
  <fieldset class="form__tree tree-form">
    <div class="tree-form__inner-wrapper">
      <legend class="tree-form__title">Выберите ёлку</legend>
      <ul class="tree-form__list">
        <li class="tree-form__item">
          <input class="tree-form__input sr-only" id="tree1" type="radio" name="tree" value="1" 
          ${tree === 1 ? 'checked' : ''}>
          <label class="tree-form__label tree-form__label--tree1" for="tree1">
          <span class="sr-only">Ёлка 1</span></label>
        </li>
        <li class="tree-form__item">
          <input class="tree-form__input sr-only" id="tree2" type="radio" name="tree" value="2" 
          ${tree === 2 ? 'checked' : ''}>
          <label class="tree-form__label tree-form__label--tree2" for="tree2">
          <span class="sr-only">Ёлка 2</span></label>
        </li>
        <li class="tree-form__item">
          <input class="tree-form__input sr-only" id="tree3" type="radio" name="tree" value="3" 
          ${tree === 3 ? 'checked' : ''}>
          <label class="tree-form__label tree-form__label--tree3" for="tree3">
          <span class="sr-only">Ёлка 3</span></label>
        </li>
        <li class="tree-form__item">
          <input class="tree-form__input sr-only" id="tree4" type="radio" name="tree" value="4"
          ${tree === 4 ? 'checked' : ''}>
          <label class="tree-form__label tree-form__label--tree4" for="tree4">
          <span class="sr-only">Ёлка 4</span></label>
        </li>
        <li class="tree-form__item">
          <input class="tree-form__input sr-only" id="tree5" type="radio" name="tree" value="5"
          ${tree === 5 ? 'checked' : ''}>
          <label class="tree-form__label tree-form__label--tree5"  for="tree5">
          <span class="sr-only">Ёлка 5</span></label>
        </li>
        <li class="tree-form__item">
          <input class="tree-form__input sr-only" id="tree6" type="radio" name="tree" value="6"
          ${tree === 6 ? 'checked' : ''}>
          <label class="tree-form__label tree-form__label--tree6"  for="tree6">
          <span class="sr-only">Ёлка 6</span></label>
        </li>
      </ul>
    </div>            
  </fieldset>

  <fieldset class="form__bg bg-form">
    <div class="bg-form__inner-wrapper">
      <legend class="bg-form__title">Выберите фон</legend>
      <ul class="bg-form__list">
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg1" type="radio" name="bg" value="1"
          ${bg === 1 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg1" for="bg1">
          <span class="sr-only">Фон 1</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg2" type="radio" name="bg" value="2"
          ${bg === 2 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg2" for="bg2">
          <span class="sr-only">Фон 2</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg3" type="radio" name="bg" value="3"
          ${bg === 3 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg3" for="bg3">
          <span class="sr-only">Фон 3</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg4" type="radio" name="bg" value="4"
          ${bg === 4 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg4" for="bg4">
          <span class="sr-only">Фон 4</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg5" type="radio" name="bg" value="5"
          ${bg === 5 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg5" for="bg5">
          <span class="sr-only">Фон 5</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg6" type="radio" name="bg" value="6"
          ${bg === 6 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg6" for="bg6">
          <span class="sr-only">Фон 6</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg7" type="radio" name="bg" value="7"
          ${bg === 7 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg7" for="bg7">
          <span class="sr-only">Фон 7</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg8" type="radio" name="bg" value="8"
          ${bg === 8 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg8" for="bg8">
          <span class="sr-only">Фон 8</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg9" type="radio" name="bg" value="9"
          ${bg === 9 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg9" for="bg9">
          <span class="sr-only">Фон 9</span></label>
        </li>
        <li class="bg-form__item">
          <input class="bg-form__input sr-only" id="bg10" type="radio" name="bg" value="10"
          ${bg === 10 ? 'checked' : ''}>
          <label class="bg-form__label bg-form__label--bg10" for="bg10">
          <span class="sr-only">Фон 10</span></label>
        </li>      
      </ul>
    </div>
  </fieldset>

  <fieldset class="form__garland garland-form">
    <div class="garland-form__inner-wrapper">
      <legend class="garland-form__title">Гирлянда</legend>
      <ul class="garland-form__list">
        <li class="garland-form__item">
          <input class="garland-form__input sr-only" id="multicolored" type="radio" name="garland" value="multicolored"        
          ${garland === 'multicolored' ? 'checked' : ''}>
          <label class="garland-form__label garland-form__label--multicolored" for="multicolored">
          <span class="sr-only">Разноцветная</span></label>
        </li>
        <li class="garland-form__item">
          <input class="garland-form__input sr-only" id="yellow" type="radio" name="garland" value="yellow"        
          ${garland === 'yellow' ? 'checked' : ''}>
          <label class="garland-form__label garland-form__label--yellow" for="yellow">
          <span class="sr-only">Жёлтая</span></label>
        </li>
        <li class="garland-form__item">
          <input class="garland-form__input sr-only" id="red" type="radio" name="garland" value="red"        
          ${garland === 'red' ? 'checked' : ''}>
          <label class="garland-form__label garland-form__label--red" for="red">
          <span class="sr-only">Красная</span></label>
        </li>
        <li class="garland-form__item">
          <input class="garland-form__input sr-only" id="green" type="radio" name="garland" value="green"        
          ${garland === 'green' ? 'checked' : ''}>
          <label class="garland-form__label garland-form__label--green" for="green">
          <span class="sr-only">Зелёная</span></label>
        </li>
        <li class="garland-form__item">
          <input class="garland-form__input sr-only" id="blue" type="radio" name="garland" value="blue"        
          ${garland === 'blue' ? 'checked' : ''}>
          <label class="garland-form__label garland-form__label--blue" for="blue">
          <span class="sr-only">Синяя</span></label>
        </li>      
      </ul>
    </div>
  </fieldset>`;
};

export default buildHtmlForTreeForm;
