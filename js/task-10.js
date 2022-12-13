function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

let enteredData = [];
createBtn.addEventListener("click", (evt) => {
  enteredData.push(input.value);
  console.log(enteredData);
});
destroyBtn.addEventListener("click", () => {
  enteredData = [];
  console.log(enteredData);
});
