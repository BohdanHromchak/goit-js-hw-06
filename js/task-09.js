function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");

const changeBtn = document.querySelector(".change-color");
console.log(changeBtn);
changeBtn.addEventListener("click", (evt) => {
  body.style.backgroundColor = getRandomHexColor();
});
