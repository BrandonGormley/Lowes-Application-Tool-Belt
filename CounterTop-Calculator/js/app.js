// JS VARIABLES

// Granite Buttons
let buttonA = document.querySelector('#letter-a');
let buttonB = document.querySelector('#letter-b');
let buttonC = document.querySelector('#letter-c');
let buttonD = document.querySelector('#letter-d');
let buttonE = document.querySelector('#letter-e');
let buttonF = document.querySelector('#letter-f');

// Quartz Buttons
let quartzButtonA = document.querySelector('#quartz-letter-a');
let quartzButtonB = document.querySelector('#quartz-letter-b');
let quartzButtonC = document.querySelector('#quartz-letter-c');
let quartzButtonD = document.querySelector('#quartz-letter-d');
let quartzButtonE = document.querySelector('#quartz-letter-e');
let quartzButtonF = document.querySelector('#quartz-letter-f');

// Solid Surface Buttons
let solidSurfaceButtonA = document.querySelector('#solidsurface-letter-a');
let solidSurfaceButtonB = document.querySelector('#solidsurface-letter-b');
let solidSurfaceButtonC = document.querySelector('#solidsurface-letter-c');
let solidSurfaceButtonD = document.querySelector('#solidsurface-letter-d');



// Cost of Granite
const costOfA = 53;
const costOfB = 63;
const costOfC = 73;
const costOfD = 79;
const costOfE = 84;
const costOfF = 104;

// Cost of Quartz
const quartzCostOfA = 61;
const quartzCostOfB = 72;
const quartzCostOfC = 79;
const quartzCostOfD = 90;
const quartzCostOfE = 96;
const quartzCostOfF = 104;

// Cost of Solid Surface
const solidSurfaceCostOfA = 36;
const solidSurfaceCostOfB = 44;
const solidSurfaceCostOfC = 54;
const solidSurfaceCostOfD = 62;


// Input / Calculate Buttons
let squareFootInput = document.querySelector('.main-input');
let calculateButton = document.querySelector('.main-button');
let total = document.querySelector('#total');


// Arrays of Buttons
let letterButtons = [buttonA, buttonB, buttonC, buttonD, buttonE, buttonF];

let quartzLetterButtons = [quartzButtonA, quartzButtonB, quartzButtonC, quartzButtonD, quartzButtonE, quartzButtonF];

let solidSurfaceLetterButtons = [solidSurfaceButtonA, solidSurfaceButtonB, solidSurfaceButtonC, solidSurfaceButtonD];

let counterTopPrices = [costOfA, costOfB, costOfC, costOfD, costOfE, costOfF];

let quartzCounterTopPrices = [quartzCostOfA, quartzCostOfB, quartzCostOfC, quartzCostOfD, quartzCostOfE, quartzCostOfF];

let solidSurfaceCounterTopPrices = [solidSurfaceCostOfA, solidSurfaceCostOfB, solidSurfaceCostOfC, solidSurfaceCostOfD];


// Granite Scripts
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


// Quartz Scripts
for (let i = 0; i < quartzLetterButtons.length; i++) {
    quartzLetterButtons[i].addEventListener('click', () => {
        quartzLetterButtons[i].classList.toggle('button-selected');
    });
}

for (let i = 0; i < quartzLetterButtons.length; i++) {
    for (let j = 0; j < quartzCounterTopPrices.length; j++) {
        calculateButton.addEventListener('click', () => {
            if (quartzLetterButtons[i].classList.contains('button-selected')) {
                let totalCost = squareFootInput.value * quartzCounterTopPrices[i];
                total.innerHTML = `Estimated Cost: $${totalCost}`;
            }
        });
    }
}

// Solid Surface Scripts
for (let i = 0; i < solidSurfaceLetterButtons.length; i++) {
    solidSurfaceLetterButtons[i].addEventListener('click', () => {
        solidSurfaceLetterButtons[i].classList.toggle('button-selected');
    });
}

for (let i = 0; i < solidSurfaceLetterButtons.length; i++) {
    for (let j = 0; j < solidSurfaceCounterTopPrices.length; j++) {
        calculateButton.addEventListener('click', () => {
            if (solidSurfaceLetterButtons[i].classList.contains('button-selected')) {
                let totalCost = squareFootInput.value * solidSurfaceCounterTopPrices[i];
                total.innerHTML = `Estimated Cost: $${totalCost}`;
            }
        });
    }
}


