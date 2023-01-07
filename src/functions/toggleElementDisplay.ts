type DisplayType = "block" | "inline" | "none" | "inline-block" | "flex" | "inline-flex" | "grid" | "inline-grid";

function toggleDisplay(show: boolean, el: string | HTMLElement, value: DisplayType = "block") {
  const element: HTMLElement | null = typeof el === "string" ? document.getElementById(el) : el;
  if (!element) return;
  if (show) element.style.display = value;
  else element.style.display = "none";
}

export default toggleDisplay;
