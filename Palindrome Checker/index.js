const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// Función para verificar si el texto es un palíndromo
const checkForPalindrome = input => {
  const originalInput = input;

  // Verificar si el input está vacío
  if (input === '') {
    alert('Please input a value');
    return; 
  }

  resultDiv.replaceChildren();

  // Convertir el input a minúsculas y eliminar caracteres especiales
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  // Verificar si el texto es un palíndromo  
  let resultMsg = `<span>${originalInput}</span> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

 
  
};

// Event listener para el clic 
checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

// Event listener para la tecla enter
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = ''; 
  }
});
