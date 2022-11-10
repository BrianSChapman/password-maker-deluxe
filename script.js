// Assignment Code
var generateBtn = document.querySelector("#generate");
var Upper = 0;
var Lower = 0;
var Special = 0;
var Numeric = 0;


function generatePassword() {

  var userLength = window.prompt("Please choose a password length, new friend!")  

if (userLength < 8 || userLength > 128) {
  window.alert("Sorry friend! Password must be between 8 and 128 characters.")
  return
 } 
}
  if (confirm("would you like to use lower case letters in it?")) { 
    Lower++;  
  }  
 

  // window.confirm("You cool with uppercase letters?");
  // window.confirm("How about random numbers? You a random numbers type?");
  // window.confirm("You want special, fancy characters?");



var characterLength = function getrandomInt(min, max) {
  min = Math.ceil(8);
  max = Math.floor(128);
  return Math.floor(Math.random()) * ((max - min) + min);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
