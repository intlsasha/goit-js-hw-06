const textInput = document.querySelector("#validation-input");

textInput.addEventListener("change", onFocusChange);

function onFocusChange(e) {
  if (e.target.value.length === +textInput.dataset.length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
