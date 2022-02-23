const form = document.querySelector(".login-form");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
let submittedData = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (
    e.currentTarget.elements.email.value === "" ||
    e.currentTarget.elements.password.value === ""
  )
    alert("Email and Password must be filled!");
  else {
    submittedData.email = e.currentTarget.elements.email.value;
      submittedData.password = e.currentTarget.elements.password.value;
      console.log(submittedData);
  }
  
  this.reset();
}
