// Import the functions from the operators.js file
import { add, subtract, multiply, divide } from "./operators.js";

// Get references to the HTML elements we need to work with
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const additionButton = document.querySelector('#addition');
const subtractionButton = document.querySelector('#subtraction');
const multiplicationButton = document.querySelector('#multiplication');
const divisionButton = document.querySelector('#division');
const result = document.querySelector('#calculating');

// Add event listeners to the buttons to perform the corresponding operation when clicked
additionButton.addEventListener('click', () => {
  result.textContent = add(firstNumber.value, secondNumber.value);
});

subtractionButton.addEventListener('click', () => {
  result.textContent = subtract(firstNumber.value, secondNumber.value);
});

multiplicationButton.addEventListener('click', () => {
  result.textContent = multiply(firstNumber.value, secondNumber.value);
});

divisionButton.addEventListener('click', () => {
  result.textContent = divide(firstNumber.value, secondNumber.value);
});
