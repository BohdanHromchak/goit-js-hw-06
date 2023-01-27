function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const boxesList = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onCreate);
destroyBtn.addEventListener("click", onDestroy);

function onCreate() {
  createBoxes(input.value);
}
function onDestroy() {
  boxesList.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  boxesList.innerHTML = "";
  let markup = "";
  let boxWidth = 20;
  let boxHeight = 20;
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="border: 2px solid; background-color: ${getRandomHexColor()}; width: ${(boxWidth += 10)}px; height: ${(boxHeight += 10)}px"></div>`;
  }
  boxesList.insertAdjacentHTML("beforeend", markup);
}
