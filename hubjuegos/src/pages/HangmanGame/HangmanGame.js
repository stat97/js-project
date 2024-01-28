export const HangmanGame = () => {
  const getRandomWord = () => {
    const words = ['javascript', 'programming', 'hangman', 'challenge'];
    return words[Math.floor(Math.random() * words.length)];
  };
  const createGuessedWord = (word) => {
    return '_'.repeat(word.length);
  };

  const HangmanGame = () => {
    let secretWord = getRandomWord();
    let guessedWord = createGuessedWord(secretWord);
    let attemptsLeft = 6;

    

   
    const handleGuess = () => {
      const guessInput = document.getElementById('guess');
      const guess = guessInput.value.toLowerCase();
      const resultElement = document.getElementById('result');

      if (!isValidGuess(guess)) {
        resultElement.textContent = 'Ingresa una letra válida.';
      } else {
        if (secretWord.includes(guess)) {
          updateGuessedWord(guess);
          resultElement.textContent = '¡Bien! Letra correcta.';
        } else {
          attemptsLeft--;
          resultElement.textContent = `Incorrecto. Intentos restantes: ${attemptsLeft}`;
        }

        if (attemptsLeft === 0 || guessedWord === secretWord) {
          endGame(attemptsLeft === 0);
        }
      }

      guessInput.value = '';
    };

    const isValidGuess = (guess) => {
      return /^[a-z]$/.test(guess) && !guessedWord.includes(guess);
    };

    const updateGuessedWord = (guess) => {
      guessedWord = guessedWord.split('').map((letter, index) =>
        secretWord[index] === guess ? guess : letter
      ).join('');
    };

    const endGame = (isGameOver) => {
      const resultElement = document.getElementById('result');
      if (isGameOver) {
        resultElement.textContent = `¡Oh no! Te quedaste sin intentos. La palabra era: ${secretWord}`;
      } else {
        resultElement.textContent = '¡Felicidades! ¡Adivinaste la palabra!';
      }
    };

    return `
      <div class="hangman-game">
        <h2>Juego del Ahorcado</h2>
        <p id="result"></p>
        <p>${guessedWord}</p>
        <input type="text" id="guess" maxlength="1" pattern="[a-zA-Z]" title="Ingresa una letra">
        <button onclick="handleGuess()">Adivinar</button>
      </div>
    `;
  };

  // Llama a la función principal al final de PrintHangmanGame
  document.querySelector("main").innerHTML = HangmanGame();
};

