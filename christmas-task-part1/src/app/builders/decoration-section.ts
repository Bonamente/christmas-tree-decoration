import { IState } from '../types';

const buildDecorationSection = (state: IState): Node => {
  const { tree, bg } = state.treeForm;
  const decorationSection = <HTMLElement>document.createElement('section');
  decorationSection.classList.add('decoration', `bg-tree-${bg}`);

  decorationSection.innerHTML = `
    <h2 class="decoration__title sr-only">Украшаемая ёлка</h2>    
    <div class="decoration__garland"></div>
    <map name="tree-map">
      <area coords="248,13,12,618,81,683,423,680,484,620" shape="poly">
    </map>
    <img class="decoration__tree" src="./trees/${tree}.png"  usemap="#tree-map" alt="украшаемая ёлка">        
  `;

  return decorationSection;
};

export default buildDecorationSection;
