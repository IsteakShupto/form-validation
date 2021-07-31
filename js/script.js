const form = document.querySelector(".form");

const formValidation = (event) => {
  event.preventDefault();

  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const passwordValidation = document.querySelector(".password-validation");
  const emailValidation = document.querySelector(".email-validation");

  if (validateEmail(email)) {
    emailValidation.classList.remove("block");
  } else {
    emailValidation.classList.add("block");
  }

  if (password.length < 6) {
    passwordValidation.classList.add("block");
  } else {
    passwordValidation.classList.remove("block");
  }
};

const validateEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

form.addEventListener("submit", formValidation);
