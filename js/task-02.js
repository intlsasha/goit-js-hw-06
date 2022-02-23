const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const newIngredients = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
ingredientsList.insertAdjacentHTML("afterbegin", newIngredients);

// for (const ingredient of ingredients) {
//     let newLi = document.createElement("li");
//   newLi.textContent = ingredient;
//   newLi.setAttribute("class", "item");
// document.querySelector("#ingredients").append(newLi);
// }
