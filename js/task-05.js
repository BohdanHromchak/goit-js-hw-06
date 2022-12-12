const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", onInput);
function onInput(evt) {
  const query = evt.currentTarget.value;

  if (query === null) {
    nameOutput.textContent = "Anonymous";
  }
  nameOutput.textContent = evt.currentTarget.value;
}
