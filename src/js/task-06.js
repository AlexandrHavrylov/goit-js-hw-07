const inputEl = document.querySelector('#validation-input')


const inputLengthValidation = () => {
  
/* Как-то по другому можно это проверять, что бы если сначала
ввести 3 символа и убрать фокус
то добавляся клас invalid, а потом если сразу же добавить еще 3 
символа клас заменялся на валидный.  Или такой способ ок? 
  */

    if (inputEl.value.length < inputEl.getAttribute('data-length')) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
         
    }

    if (inputEl.value.length >= inputEl.getAttribute('data-length')) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }
     
}



inputEl.addEventListener('blur', inputLengthValidation)