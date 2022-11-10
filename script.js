// Assignment Code
var generateBtn = document.querySelector("#generate");

 function getrandomInt(min, max) {
    return Math.floor(Math.random()) * ((max - min) + min)
 }
function generatePassword() {

  var userLength = window.prompt("Please choose a password length, new friend!")  

if (userLength < 8 || userLength > 128) {
  window.alert("Sorry friend! Password must be between 8 and 128 characters.")
  return
 } 

 var userLowercase = window.confirm("would you like to use lower case letters in it?");
var userUppercase = window.confirm("You cool with uppercase letters?");
var userNumeric = window.confirm("How about random numbers? You a random numbers type?");
 var userSpecial = window.confirm("You want special, fancy characters? You know you do.");


var lowerCaseList = ( "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z")
var upperCaseList = ( "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z")
var specialCharacters = ( "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*")
var numbersList = ("0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9")

var randomPile = []

if (userLowercase === true) {
  randomPile.push(lowerCaseList)
}

if (userUppercase === true) {
  randomPile.push(upperCaseList)
}

if (userNumeric === true) {
  randomPile.push(numbersList)
}

if (userSpecial === true) {
  randomPile.push(specialCharacters)
}

// var randomPileGenerator = ""

//   for (var i = 0; i <userLength, i++) {
//     var
  } 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

