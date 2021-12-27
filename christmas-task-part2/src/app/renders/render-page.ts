import { IState } from '../types';
import buildHeader from '../builders/header';
import buildPageContent from '../builders/page-content';
import buildFooter from '../builders/footer';

import createCountSLider from '../sliders/count-slider';
import createYearSlider from '../sliders/year-slider';
import playMusic from '../utils/media/play-music';
import makeSnow from '../utils/media/make-snow';
import makeGarland from '../utils/media/makeGarland';

const renderPage = (state: IState): void => {
  const { activePage } = state;

  const header = buildHeader(state);
  const pageContent = buildPageContent(state);
  const footer = buildFooter();

  document.body.innerHTML = '';
  document.body.append(header, pageContent, footer);

  if (activePage === 'toys-page') {
    createCountSLider(state);
    createYearSlider(state);
  }

  if (activePage === 'tree-page') {
    const { audio, snow, garland } = state.mediaForm;

    if (audio) {
      const listener = () => {
        playMusic(true);
        document.removeEventListener('click', listener);
      };

      document.addEventListener('click', listener);
    }

    if (snow) {
      makeSnow(true);
    }

    if (garland) {
      makeGarland(true, `${state.treeForm.garland}`);
    }
  }
};

export default renderPage;
