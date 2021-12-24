import { IState } from '../../types';
import changeTree from './change-tree';
import changeTreeBackground from './change-tree-background';
import makeGarland from '../media/makeGarland';

const changeDecorations = (state: IState): void => {
  const { mediaForm, treeForm } = state;
  const isGarlandOn = mediaForm.garland;
  const { tree, bg, garland } = treeForm;

  changeTree(tree);
  changeTreeBackground(bg);
  makeGarland(isGarlandOn, `${garland}`);
};

export default changeDecorations;
