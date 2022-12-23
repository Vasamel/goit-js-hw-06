const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allItems = ingredients.map(ingredient => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  return liItem;
});

console.log(allItems);

const listElem = document.querySelector("#ingredients");
listElem.append(...allItems);

