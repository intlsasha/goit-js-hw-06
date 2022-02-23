let inputText = document.querySelector("#name-input");
let outputText = document.querySelector("#name-output");

inputText.addEventListener("input", onEnterInput);

function onEnterInput(e) {
  inputText = e.currentTarget.value;
  inputText !== " " ? (outputText.innerText = inputText.trim()) : "Anonymous";
}
