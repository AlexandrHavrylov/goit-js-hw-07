const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
  const li = document.createElement('li')
  li.textContent = `${ingredient}`

  return li
})


ingredientsListEl.append(...elements);