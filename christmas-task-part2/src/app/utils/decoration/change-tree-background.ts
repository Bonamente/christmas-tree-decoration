const changeTreeBackground = (value: number | string): void => {
  const decorationSection = <HTMLDivElement>document.querySelector('.decoration');

  decorationSection.className = '';
  decorationSection.classList.add('decoration', `bg-tree-${value}`);
};

export default changeTreeBackground;
