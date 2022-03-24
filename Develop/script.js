// Assignment code here
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialCharacter = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "~", "?", ":", ]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var choices = []
  var passwordLength = window.prompt("Password length must be between 8 and 128 characters.");
    console.log(passwordLength);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
