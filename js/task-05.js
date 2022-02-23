let inputText = document.querySelector("#name-input");
let outputText = document.querySelector("#name-output");

inputText.addEventListener("input", onEnterInput);

function onEnterInput(e) {
  let userInput = e.currentTarget.value.trim();
  outputText.textContent = userInput === "" ? "Anonymous" : userInput;
}
