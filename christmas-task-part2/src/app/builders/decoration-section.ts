import { IState } from '../types';

const buildDecorationSection = (state: IState): Node => {
  const { tree, bg } = state.treeForm;
  const decorationSection = <HTMLElement>document.createElement('section');
  decorationSection.classList.add('decoration', `bg-tree-${bg}`);

  decorationSection.innerHTML = `
    <h2 class="decoration__title sr-only">Украшаемая ёлка</h2>    
    <div class="decoration__snowflakes"></div>
    <div class="decoration__garland"></div>
    <map name="tree-map">
      <area coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,
      161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" shape="poly">
    </map>
    <img class="decoration__tree" src="./trees/${tree}.png"  usemap="#tree-map" alt="украшаемая ёлка">        
  `;

  return decorationSection;
};

export default buildDecorationSection;
