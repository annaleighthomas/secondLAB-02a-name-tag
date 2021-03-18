const newText = document.getElementById('changed-name');

const userInput = document.getElementById('change-input');

const nameButton = document.getElementById('change-button');



nameButton.addEventListener('click', () => {
    const userInfo = userInput.value;
    
    newText.textContent = userInfo;

});

const newPronouns = document.getElementById('new-pronouns')

const userInputPronouns = document.getElementById('change-pronouns')

const pronounButton = document.getElementById('change-button-pronouns')

pronounButton.addEventListener('click', () => {
    const userPronouns = userInputPronouns.value;

    newPronouns.tectContent = userPronouns;

});
