function scrollToHorizontally(element: HTMLElement): void {
  if (element === null || !(element instanceof Element)) return;
  // @ts-ignore: Cant be null
  element.parentNode.scrollLeft = element.offsetLeft - 24;
}

export default scrollToHorizontally;
