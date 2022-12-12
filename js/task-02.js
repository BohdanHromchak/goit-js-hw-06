const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const listEl = document.createElement("li");
  listEl.textContent = option;
  listEl.classList.add("item");
  return listEl;
});

ingredientsEl.append(...elements);
