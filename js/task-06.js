const input = document.querySelector("#validation-input");
input.addEventListener("blur", (evt) => {
  if (evt.currentTarget.value.length === 6) {
    return alert("ok");
  }
  alert("wtf");
});
