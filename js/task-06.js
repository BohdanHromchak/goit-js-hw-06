const input = document.querySelector("#validation-input");
input.addEventListener("blur", (evt) => {
  if (evt.currentTarget.value.length === 6) {
    return (input.style.borderColor = "#4caf50");
  }
  input.style.borderColor = "#f44336";
});
