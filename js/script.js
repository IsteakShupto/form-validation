const form = document.querySelector("form");

const formValidation = (event) => {
  event.preventDefault();

  const password = document.querySelector("#password").value;
  const passwordValidation = document.querySelector("#password-validation");

  console.log(passwordValidation.classList);

  if (password.length < 6) {
    passwordValidation.classList.add("block");
    passwordValidation.classList.remove("hidden");
  } else {
    passwordValidation.classList.remove("block");
    passwordValidation.classList.add("hidden");
  }
};

form.addEventListener("submit", formValidation);
