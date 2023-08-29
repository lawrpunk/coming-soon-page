const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".invalid-email-text");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const typedEmail = emailInput.value;

  if (isValidEmail(typedEmail)) {
    emailInput.classList.remove("invalid-email");
    errorIcon.classList.remove("show");
    errorText.classList.remove("show");
  } else {
    emailInput.classList.add("invalid-email");
    errorIcon.classList.add("show");
    errorText.classList.add("show");
  }
});
