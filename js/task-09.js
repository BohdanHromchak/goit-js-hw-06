function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const colorName = document.querySelector(".color");

const changeBtn = document.querySelector(".change-color");
console.log(changeBtn);
changeBtn.addEventListener("click", (evt) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
});
