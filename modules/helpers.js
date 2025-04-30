function getElement(elm) {
  return document.getElementById(elm);
}

function enable(elm) {
  return getElement(elm).removeAttribute("disabled");
}

function disable(elm) {
  return getElement(elm).setAttribute("disabled", true)
}

function capitalize(word) {
  if (word.length != "") return word[0].toUpperCase() + word.slice(1);
}

export { getElement, enable, disable, capitalize };