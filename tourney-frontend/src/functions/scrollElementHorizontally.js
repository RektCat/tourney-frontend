function scrollToHorizontally(element) {
  element.parentNode.scrollLeft = element.offsetLeft - 24;
}

export default scrollToHorizontally;
