let counterValue = 0;

// const buttonDown = document.querySelector('button[data-action="decrement"]');

// buttonDown.addEventListener("click", () => {
//     counterValue -= 1;
//     document.querySelector('#value').innerHTML = counterValue;
// });

// const buttonUp = document.querySelector('button[data-action="increment"]');

// buttonUp.addEventListener("click", () => {
//     counterValue += 1;
//     document.querySelector("#value").innerHTML = counterValue;
// });

const buttonDown = document.querySelector('button[data-action="decrement"]');

const onButtonDownClick = () => {
  counterValue -= 1;
  document.querySelector("#value").innerHTML = counterValue;
};
buttonDown.addEventListener("click", onButtonDownClick);

const buttonUp = document.querySelector('button[data-action="increment"]');

const onButtonUpClick = () => {
  counterValue += 1;
  document.querySelector("#value").innerHTML = counterValue;
};
buttonUp.addEventListener("click", onButtonUpClick);
