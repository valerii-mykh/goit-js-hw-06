const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul");
const markup = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join("");
  list.innerHTML = markup;