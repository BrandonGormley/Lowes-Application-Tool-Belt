let weight = document.querySelector('#weight');
let button = document.querySelector('.water-button');
let waterIntake = document.querySelector('#water-intake');

button.addEventListener('click', () => {
    waterIntake.textContent = parseInt(weight.value) * .67 + ' fluid ounces daily.';
});
