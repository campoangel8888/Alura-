# Text Encryption Utility This project provides a simple utility for encrypting text based on predefined rules.

The encryption process replaces specific vowels with corresponding encoded strings to obfuscate the original text.

![result](https://github.com/user-attachments/assets/9224d38a-b108-42fd-b834-1c7e3bdf8656)

## Encryption Rules

The following rules are used for encryption: - `'e'` => `'enter'` - `'i'` => `'imes'` - `'a'` => `'ai'` - `'o'` => `'ober'` - `'u'` => `'ufat'`

## Getting Started

### Prerequisites No special prerequisites are required. You only need a modern web browser to run the HTML file.

### Usage 1.

**Clone or Download the Repository**: ```bash git clone https://github.com/campoangel8888/Alura-.git

or download the ZIP file from the repository page.

2.  **Open the HTML File**: Navigate to the directory where you cloned or downloaded the repository and open `index.html` in a web browser.
3.  **Enter Text and Encrypt**:

    - Type your text into the input field.
    - Click the "Encrypt Text" button to see the encrypted text displayed below.

### Example

Here is how the encryption works:

- **Input Text**: `this is a test`
- **Encrypted Text**: `thimesimes enterstimes enterst`

### Code Overview

The core function for encryption is implemented in `index.js`:

/\*\*

- Encrypts a given text by replacing specific vowels with predefined strings.
- The following encryption rules are applied:
- - 'e' => 'enter'
- - 'i' => 'imes'
- - 'a' => 'ai'
- - 'o' => 'ober'
- - 'u' => 'ufat'
-
- @param {string} text - The input text to be encrypted.
- @returns {string} - The encrypted text with the specified characters replaced.
-
- @example
- // Example usage:
- const encrypted = encryptText('this is a test');
- console.log(encrypted); // Output: "thimesimes enterstimes enterst"
  \*/
  function encryptText(text) {
  const ENCRYPTION_RULES = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
  };

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

To use it just open the html file and see the magic happen.
