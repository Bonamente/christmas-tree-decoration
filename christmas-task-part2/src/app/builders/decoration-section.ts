import { IState } from '../types';

const buildDecorationSection = (state: IState): Node => {
  const { tree, bg } = state.treeForm;
  const decorationSection = <HTMLElement>document.createElement('section');
  decorationSection.classList.add('decoration', `bg-tree-${bg}`);

  decorationSection.innerHTML = `
    <h2 class="decoration__title sr-only">Украшаемая ёлка</h2>    
    <div class="decoration__garland"></div>
    <map name="tree-map">    
      <area coords="325,240,485,630,284,111,268,65,264,49,248,13,193,113,8,625,485,632,484,634,9,624,64,469,7,624,76,684,439,688,485,627,485,630,335,226,8,625" shape="poly">
    </map>
    <img class="decoration__tree" src="./trees/${tree}.png"  usemap="#tree-map" alt="украшаемая ёлка">        
  `;

  return decorationSection;
};

export default buildDecorationSection;
