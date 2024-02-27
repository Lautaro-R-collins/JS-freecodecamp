const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// logic Number Validator
const checkNumPhone = input => {
    if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const output = document.createElement('p');
  output.className = 'results-text';
  phoneRegex.test(input)
    ? (output.style.color = '#006400')
    : (output.style.color = '#FF0000');
  output.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(output);
};

// Alert msg Please provide a phone number
checkBtn.addEventListener('click', () => {
  checkNumPhone(userInput.value);
  userInput.value = '';
});


// Clear msg
clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});