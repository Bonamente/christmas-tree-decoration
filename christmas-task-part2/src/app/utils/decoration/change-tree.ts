const changeTree = (value: string) => {
  const treeImage = <HTMLImageElement>document.querySelector('.decoration__tree');
  treeImage.src = `./trees/${value}.png`;
};

export default changeTree;
