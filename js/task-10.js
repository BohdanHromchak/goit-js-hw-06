function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onCreate);
destroyBtn.addEventListener("click", onDestroy);

function onCreate() {}
function onDestroy() {}

function createBoxes(amount) {
  let boxSize = 30;
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="background-color: aquamarine; width: 30px; height: 30px"></div>`;
  }
}
