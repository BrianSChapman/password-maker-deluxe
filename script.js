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

 var userLowercase = window.confirm("would you like to use lower case letters in it?");

 if (userLowercase === true) {
  Lower++;
 } 

 var userUppercase = window.confirm("You cool with uppercase letters?");

 if (userUppercase === true) {
  Upper++;
 }

var userNumeric = window.confirm("How about random numbers? You a random numbers type?");
 
if (userNumeric === true) {
  Numeric++;
}

var userSpecial = window.confirm("You want special, fancy characters?");

if (userSpecial === true) {
  Special++;
}
var lowerCaseList = ( "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z")
var upperCaseList = ( "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z")
var specialCharacters = ( "@" , "#" , "$" , "%" , "^" , "&" , "*")

}

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
