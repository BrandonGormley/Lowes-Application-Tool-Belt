// JS VARIABLES (DOM)
let itemInput = document.querySelector('.main-input');
let displayText = document.querySelector('.main-display-text');
let mainButton = document.querySelector('.main-button');

// APPLIANCE DISPLAYS ARRAY
let applianceDisplays = ['852884'];



mainButton.addEventListener('click', () => {
    checkDisplay();
});








// CHECKS ITEM NUMBER IF ON DISPLAY
function checkDisplay() {
    for (let i = 0; i < applianceDisplays.length; i++) {
        if (itemInput.value === applianceDisplays[i]) {
            displayText.textContent = 'DISPLAYED!';
        }
        else {
            displayText.textContent = 'NOT DISPLAYED :(';
        }
    }
}



