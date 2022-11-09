// Assignment Code
var generateBtn = document.querySelector("#generate");
var buttonclick = window.prompt("Please choose the length of your password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var buttonclick = window.prompt("Please choose the length of your password");
