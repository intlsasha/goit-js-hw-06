const inputFontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
inputFontSize.addEventListener("change", onInputChange);

function onInputChange(e) {
  console.log(e.currentTarget.value);
  text.innerHTML = `<span id="text" style="font-size: ${e.currentTarget.value}px">Abracadabra!</span>`;
}
