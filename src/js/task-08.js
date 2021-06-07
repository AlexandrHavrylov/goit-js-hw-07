const numbersInputEl = document.querySelector('input')
const renderButtonEl = document.querySelector('button[data-action = "render"]')
const destroyButtonEl = document.querySelector('button[data-action = "destroy"]')
const boxEl = document.querySelector('#boxes')



let amount = 0;

numbersInputEl.addEventListener('input', event => {
    
    amount = event.currentTarget.value
   
})

function getRandomRGB(min, max){
  return Math.random() * (max - min) + min
}

function sizeUp(i){
    let size = 30;
    size += i*10
    return size;
}

const elementsAdd = () => {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div')
        
        const addedDivEl = boxEl.children
    boxEl.append(div)
        
        
    
        addedDivEl[i].style.width = `${sizeUp(i)}px`
        addedDivEl[i].style.height = `${sizeUp(i)}px`
        addedDivEl[i].style.backgroundColor = `rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`
        
    

    }
}

 const  destroingElements = () => {
     boxEl.innerHTML = " "
} 


renderButtonEl.addEventListener('click', elementsAdd)
destroyButtonEl.addEventListener('click',destroingElements )
