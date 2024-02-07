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

  // Verificar si el texto es un palíndromo y generar el mensaje 
  let resultMsg = `<span>${originalInput}</span> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  // Crear un elemento <p> para mostrar el mensaje
  const pTag = document.createElement('p');
  pTag.className = 'user-input'; // Establecer la clase CSS
  pTag.innerHTML = resultMsg; // Establecer el contenido HTML del <p>

  // Agregar el <p> al div de resultados
  resultDiv.appendChild(pTag);

  // Mostrar el resultado
  resultDiv.classList.remove('hidden');
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
