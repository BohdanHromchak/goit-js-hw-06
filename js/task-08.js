const form = document.querySelector(".login-form");
// const email = document.querySelector("[name='email']");
// const password = document.querySelector("[name='password']");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  console.log(email.value);
  if (!email.value || !password.value) {
    return alert("Bсі поля повинні бути заповнені!");
  }
});
