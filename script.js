// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}
var userLength = window.prompt("Please choose a password length, new friend!")  

var characterLength = function getrandomInt(min, max) {
  min = Math.ceil(8);
  max = Math.floor(128);
  return Math.floor(Math.random()) * ((max - min) + min);
}  
if (!characterLength) {
  window.alert("Sorry friend! Password must be between 8 and 128 characters.");
} else if (
  window.confirm("Would you like to use lowercase letters in it?")) 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
