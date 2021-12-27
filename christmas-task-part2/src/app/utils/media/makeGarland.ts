import buildHtmlForGarland from '../../builders/htmlForGarland';

const makeGarland = (isActive: boolean, color = 'multicolored'): void => {
  const decorationGarland = <HTMLDivElement>document.querySelector('.decoration__garland');
  decorationGarland.innerHTML = isActive ? buildHtmlForGarland(color) : '';
};

export default makeGarland;
