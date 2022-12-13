const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert("Bсі поля повинні бути заповнені!");
  }
  const enteredData = {};
  enteredData.email = email.value;
  enteredData.password = password.value;
  console.log(enteredData);
  form.reset();
});
