function toggleDisplay(show, id, value = "block") {
  if (show) document.getElementById(id).style.display = value;
  else document.getElementById(id).style.display = "none";
}

export default toggleDisplay;
