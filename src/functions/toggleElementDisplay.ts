type DisplayType = "block" | "inline" | "none" | "inline-block" | "flex" | "inline-flex" | "grid" | "inline-grid";

function toggleDisplay(show: boolean, id: string, value: DisplayType = "block") {
  const element: HTMLElement | null = document.getElementById(id);
  if (!element) return;
  if (show) element.style.display = value;
  else element.style.display = "none";
}

export default toggleDisplay;
