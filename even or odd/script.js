// style.js

function check() {
    const inputValue = document.getElementById('inputValue').value;
    const resultElement = document.getElementById('result');

    // Check if input is a valid number
    if (inputValue === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    const number = parseInt(inputValue, 10);
    
    // Determine if the number is even or odd
    if (number % 2 === 0) {
        resultElement.textContent = `${number} is an even number.`;
    } else {
        resultElement.textContent = `${number} is an odd number.`;
    }
}

function restart() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('inputValue').focus(); // Set focus back to the input field
}
