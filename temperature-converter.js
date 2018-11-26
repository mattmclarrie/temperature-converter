// Selects components to be used 
const convertButton = document.querySelector('button')
const convertBtnFar = document.querySelector('#convert--btn-farenheit')
const input = document.querySelector('#user-input')
const inputTwo = document.querySelector('#user-input-two')
const printTemp = document.querySelector('h5')

// Converts user input farenheit temperature to celsisus and prints results on screen
const toFarenheit = function (farenheit) {
    const result = Math.round((5/9) * (farenheit - 32))
    printTemp.innerHTML = `The temperature in Celsius is ${result}&#8451;` // prints result
    input.value = "" // Clears input field
}

// Converts user input farenheit temperature to celsisus and prints results on screen
const toCelsius = function (celsius) {
    const result = Math.round((celsius * (9/5) + 32))
    printTemp.innerHTML = `The temperature in Farenheit is ${result}&#8457;` // prints result
    inputTwo.value = "" // Clears input field
}

// Event listeners, functions are called upon click and keypress
convertButton.addEventListener('click', function (e) {
    toFarenheit(input.value)
})

convertBtnFar.addEventListener('click', function (e) {
    toCelsius(inputTwo.value)
})

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        toFarenheit(input.value)
    } 
})

inputTwo.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        toCelsius(inputTwo.value)
    } 
})


