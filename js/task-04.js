const counter = document.querySelector("#value");

const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');

let counterValue = 0;
buttonDecr.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
buttonIncr.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
