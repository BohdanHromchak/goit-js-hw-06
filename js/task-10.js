function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// створення і очищення колекції елементів
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

let enteredData = [];
createBtn.addEventListener("click", () => {
  enteredData.push(input.value);
  console.log(enteredData);
});
destroyBtn.addEventListener("click", () => {
  enteredData = [];
  console.log(enteredData);
});

// Функція createBoxes(amount)
const box = document.querySelector("#boxes");

let boxesArray = [];
function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    boxesArray += `<div></div>.`;
  }
}
createBoxes(3);
console.log(boxesArray.split("."));
// box.insertAdjacentHTML("beforeend", markup);

// const elements = boxesArray.map((option) => {
//   .style.backgroundColor = 'red'
// });

// Функція  destroyBoxes()
// const test = [";", "k"];
// console.log(test);
