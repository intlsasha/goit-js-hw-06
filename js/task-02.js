const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



for (const ingredient of ingredients) {
    let newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.setAttribute("class", "item");
document.querySelector("#ingredients").append(newLi);
}


