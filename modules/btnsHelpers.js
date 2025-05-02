import { disable, enable } from "./helpers.js";

function disableBtns() {
  const btnsContainer = document.querySelector("#btnsContainer");

  for (let el of btnsContainer.children) {
    disable(el);
  }
}

function enableBtns() {
  const btnsContainer = document.querySelector("#btnsContainer");

  for (let el of btnsContainer.children) {
    enable(el);
  }
}


export { disableBtns, enableBtns };