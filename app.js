const newText = document.getElementById('changed-name');

const userInput = document.getElementById('change-input');

const button = document.getElementById('change-button');



button.addEventListener('click', () => {
    const userInfo = userInput.value;
    
    newText.textContent = userInfo;

});
