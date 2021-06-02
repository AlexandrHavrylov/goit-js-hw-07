const valueEl = document.querySelector('#value')

let counterValue = 0;

const increment = () => {
    counterValue += 1
    return valueEl.textContent = counterValue;
}


const dicrement = () => {
    counterValue -= 1
        return valueEl.textContent = counterValue;
}

const decButtonEl = document.querySelector('button[data-action="decrement"]')
const incButtonEl = document.querySelector('button[data-action="increment"]')

decButtonEl.addEventListener('click', dicrement)

incButtonEl.addEventListener('click', increment)