function enable(elm) {
  return elm.removeAttribute("disabled");
}

function disable(elm) {
  return elm.setAttribute("disabled", true);
}

function capitalize(word) {
  if (word.length != "") return word[0].toUpperCase() + word.slice(1);
}

export { enable, disable, capitalize };