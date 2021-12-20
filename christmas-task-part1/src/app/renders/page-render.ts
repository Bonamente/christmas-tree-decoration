import { IState } from '../app';
import buildHeader from '../builders/header';
import buildPageContent from '../builders/page-content';
import buildFooter from '../builders/footer';

const renderPage = (state: IState): void => {
  const header = buildHeader(state);
  const pageContent = buildPageContent(state);
  const footer = buildFooter();

  document.body.innerHTML = '';
  document.body.append(header, pageContent, footer);  
};

export default renderPage;
