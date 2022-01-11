const buildFooter = (): Node => {
  const footerElement = <HTMLElement>document.createElement('footer');
  footerElement.classList.add('footer');

  footerElement.innerHTML = `
  <div class="footer__container">
    <div class="footer__data">
      <p class="footer__copyright">©</p>
      <p class="footer__year">2021</p>
      <a class="footer__github" href="https://github.com/Bonamente" target="_blank" 
      rel="noopener noreferrer">Bonamente</a>        
    </div>    
    <a class="footer__logo" href="https://rs.school/js/" target="_blank" 
    rel="noopener noreferrer"></a>
  </div
 `;

  return footerElement;
};

export default buildFooter;
