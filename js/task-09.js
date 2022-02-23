function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColor = document.querySelector(".change-color");
const colorHexCode = document.querySelector(".color");

changeColor.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorHexCode.innerHTML = body.style.backgroundColor;
}
