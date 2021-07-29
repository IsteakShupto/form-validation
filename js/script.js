const form = document.querySelector("form");

const formValidation = (event) => {
  event.preventDefault();

  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const passwordValidation = document.querySelector("#password-validation");
  const emailValidation = document.querySelector("#email-validation");

  console.log(emailValidation);

  if (validateEmail(email)) {
    emailValidation.classList.remove("block");
    emailValidation.classList.add("hidden");
  } else {
    emailValidation.classList.add("block");
    emailValidation.classList.remove("hidden");
  }

  if (password.length < 6) {
    passwordValidation.classList.add("block");
    passwordValidation.classList.remove("hidden");
  } else {
    passwordValidation.classList.remove("block");
    passwordValidation.classList.add("hidden");
  }
};

const validateEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

form.addEventListener("submit", formValidation);
