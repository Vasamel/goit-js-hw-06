const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ul = document.getElementById(`ingredients`);
let li = document.createElement(`li`);
const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join(``);

ul.insertAdjacentHTML(`beforeend`, markup)

console.log(markup);

