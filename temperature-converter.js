// Selects components to be used 
const convertButton = document.querySelector('button')
const input = document.querySelector('#user-input')
const printTemp = document.querySelector('h6')

// Converts user input farenheit temperature to celsisus and prints results on screen
const toFarenheit = function (farenheit) {
    const result = Math.round((5/9) * (farenheit - 32))
    printTemp.innerHTML = `The temperature in Celsius is ${result}` // prints result
}

// Event listeners, functions are called upon click and keypress
convertButton.addEventListener('click', function (e) {
    toFarenheit(input.value)
})

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        toFarenheit(input.value)
    } 
})


