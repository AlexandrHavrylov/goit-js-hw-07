

const categoryItemEls = document.querySelectorAll('.item')

console.log(`Всего ${categoryItemEls.length} категории`)


const subcategiesEls = document.querySelectorAll('.item ul')


/* Учитывая ваш комментарий оставляю forEach, 
но насколько неправильно использовать фор ?? 
Вроде как более читабельно */

// const caegoryItemTitleEl = document.querySelectorAll('.item h2')

// for (let i = 0; i < caegoryItemTitleEl.length; i += 1) {
//     console.log(`Категория: ${caegoryItemTitleEl[i].textContent}.
//  Количество элементов: ${subcategiesEls[i].children.length}`)
// }


subcategiesEls.forEach(subcategory => {
    console.log(`Категория ${subcategory.previousElementSibling.textContent}.
Количество элементов': ${subcategory.children.length}`)
    
});

