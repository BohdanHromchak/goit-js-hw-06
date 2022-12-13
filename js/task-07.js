const sizeValue = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeValue.addEventListener("mousemove", (evt) => {
  let fontSize = evt.currentTarget.value;
  text.style.fontSize = fontSize + "px";
});
