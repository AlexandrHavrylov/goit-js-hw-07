const sliderEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
console.log(sliderEl)


const fontSizeUpper = () => {
    
}   
sliderEl.addEventListener('input', event => {
 
    return textEl.style.fontSize = `${event.currentTarget.value}px`
})


