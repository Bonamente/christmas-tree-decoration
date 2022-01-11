import { IState } from '../../types';
import playMusic from './play-music';
import makeSnow from './make-snow';
import makeGarland from './makeGarland';

const runMedia = (state: IState, prevValues: boolean[]): void => {
  const [prevAudio, prevSnow, prevGarland] = prevValues;
  const { mediaForm, treeForm } = state;

  if (mediaForm.audio && !prevAudio) {
    playMusic(true);
  } else if (!mediaForm.audio && prevAudio) {
    playMusic(false);
  }

  if (mediaForm.snow && !prevSnow) {
    makeSnow(true);
  } else if (!mediaForm.snow && prevSnow) {
    makeSnow(false);
  }

  if (mediaForm.garland && !prevGarland) {
    makeGarland(true, `${treeForm.garland}`);
  } else if (!mediaForm.garland && prevGarland) {
    makeGarland(false, `${treeForm.garland}`);
  }
};

export default runMedia;
