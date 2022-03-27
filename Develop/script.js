var charString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", 
 "~!@#$%^&*()-_=+"];

var userInput = "";

var password = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  password = generatePassword();
  passwordText.value = ''; 
  passwordText.value = password;
}

// Character length prompt
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === 
false) {
  characterLength = parseInt(prompt(`Password must be between 8 and 128 characters. Please pick a number between 8 
    128`));
      }

  var upper = false
  var lower = false
  var number = false
  var symbol = false

  while (true) {
   
    //prompt for uppercase
    upper = confirm("Confirm uppercase characters");

    //prompt for lowercase
    lower = confirm("Confirm lowercase characters");

    //prompt for numbers
    number = confirm("Confirm numeric characters");

    //prompt for special characters
    symbol = confirm("Confirm special characters");

    break;
  }

  console.log('Using upper', upper);
  console.log('Using lower', lower);
  console.log('Using number', number);
  console.log('Using symbol', symbol);

  upper && (userInput += charString[0])

  lower && (userInput += charString[1])

  number && (userInput += charString[2])

  symbol && (userInput += charString[3])

  var password = "";

  for (var i = 0; i < characterLength; i++) {
    var index = Math.floor(Math.random() * userInput.length);
    password += userInput[index]
  }

  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);