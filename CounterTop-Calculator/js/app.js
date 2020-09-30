// JS VARIABLES

let buttonA = document.querySelector('#letter-a');
let buttonB = document.querySelector('#letter-b');
let buttonC = document.querySelector('#letter-c');
let buttonD = document.querySelector('#letter-d');
let buttonE = document.querySelector('#letter-e');
let squareFootInput = document.querySelector('.main-input');
let calculateButton = document.querySelector('.main-button');
let total = document.querySelector('#total');

const costOfA = 50;
const costOfB = 60;
const costOfC = 70;
const costOfD = 80;
const costOfE = 90;

let letterButtons = [buttonA, buttonB, buttonC, buttonD, buttonE];
let counterTopPrices = [costOfA, costOfB, costOfC, costOfD, costOfE];

for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', () => {
        letterButtons[i].classList.toggle('button-selected');
    });
}


for (let i = 0; i < letterButtons.length; i++) {
    for (let j = 0; j < counterTopPrices.length; j++) {
        calculateButton.addEventListener('click', () => {
            if (letterButtons[i].classList.contains('button-selected')) {
                let totalCost = squareFootInput.value * counterTopPrices[i];
                total.innerHTML = `Estimated Cost: $${totalCost}`;
            }
        });
    }
}


