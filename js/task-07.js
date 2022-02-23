const inputFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
inputFontSize.addEventListener("change", onInputChange);

text.style.fontSize = inputFontSize.value + "px";

function onInputChange(e) {
  console.log(e.currentTarget.value);
  text.style.fontSize = e.currentTarget.value + "px";
}
