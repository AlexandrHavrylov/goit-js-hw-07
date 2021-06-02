const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients')

const elements = [];

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li')
  ingredientsItem.textContent = `${ingredient}`
  
elements.push (ingredientsItem)

})

ingredientsListEl.append(...elements);