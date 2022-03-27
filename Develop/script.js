
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890~!@#$%^&*()-+"
  var passwordLength = 8;
  var password = "";

  for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random()
    * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("password").value = password;

  var upperConfirm = window.confirm ("Would you like to include uppercase characters in your password?");
    console.log(upperConfirm);

  var lowerConfirm = window.confirm ("Would you like to include lowercase characters in your password?");
    console.log(lowerConfirm);

  var numericConfirm = window.confirm ("Would you like to include numbers in your password?");
    console.log(numericConfirm);

  var specialConfirm = window.confirm ("Would you like to include special characters in your password?");
    console.log(specialConfirm);

  if(passwordLength < "128" || passwordLength > "8" || passwordLength === "" || passwordLength === null) {
    window.alert("Passwords must be at least 8 characters and no more than 128 chracters. Please use a valid entry.");
    return generatePassword ();
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
