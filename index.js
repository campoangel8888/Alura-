const ENCRYPTION_RULES = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

/**
 * Encrypts a given text by replacing specific vowels with predefined strings.
 * The following encryption rules are applied:
 * - 'e' => 'enter'
 * - 'i' => 'imes'
 * - 'a' => 'ai'
 * - 'o' => 'ober'
 * - 'u' => 'ufat'
 *
 * @param {string} text - The input text to be encrypted.
 * @returns {string} - The encrypted text with the specified characters replaced.
 *
 * @example
 * // Example usage:
 * const encrypted = encryptText('this is a test');
 * console.log(encrypted); // Output: "thimesimes enterstimes enterst"
 */

function encryptText(text) {
  // Convert the text to an array of characters
  let encryptedTextArray = [];

  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i];
    if (ENCRYPTION_RULES[currentChar]) {
      encryptedTextArray.push(ENCRYPTION_RULES[currentChar]);
    } else {
      encryptedTextArray.push(currentChar);
    }
  }

  return encryptedTextArray.join('');
}

// Function to handle the button click and show the result
function encryptInput() {
  const inputText = document.getElementById('inputText').value;

  const encryptedText = encryptText(inputText);

  // Display the encrypted text
  document.getElementById(
    'output'
  ).innerText = `Encrypted Text: ${encryptedText}`;
}
