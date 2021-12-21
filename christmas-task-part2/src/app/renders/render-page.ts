import { IState } from '../types';
import buildHeader from '../builders/header';
import buildPageContent from '../builders/page-content';
import buildFooter from '../builders/footer';

import createCountSLider from '../sliders/count-slider';
import createYearSlider from '../sliders/year-slider';

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
};

export default renderPage;
