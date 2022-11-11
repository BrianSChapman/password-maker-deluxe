// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function to generate random integers for our password
 function randomInteger(min, max) {
    if (!max) {
      max = min
      min = 0
    }
// Parameters that will return rounded down numbers to a random integer list
var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}
function gimmeRandom(list) {
return list[randomInteger(list.length)]
}
// Start of the function process to actually generate the password
function generatePassword() {

  var userLength = window.prompt("Please choose a password length, new friend!") 
  // If the user hits cancel, we exit.
  if (!userLength) {
    return;
  }
//  An alert will pop up if a user enters the wrong password length
  if (userLength < 8 || userLength > 128) {
  window.alert("Sorry friend! Password must be between 8 and 128 characters.")
  return
 } 
// Confirm pop-ups to gather all the user options
 var userLowercase = window.confirm("would you like to use lower case letters in it?");
var userUppercase = window.confirm("You cool with uppercase letters?");
var userNumeric = window.confirm("How about random numbers? You a random numbers type?");
 var userSpecial = window.confirm("You want special, fancy characters? You know you do.");

// The pool of options available based upon on what options were chosen above by user
var lowerCaseList = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
var upperCaseList = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]
var specialCharacters = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*"]
var numbersList = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"]
// A holding place for the variables above based upon how user's answered the prompts
var randomUserchoices = []
// If statements to reflect that, if a user clicked "OK" in the prompts, the variable lists should be pushed to the randomUserChoices variable
if (userLowercase === true) {
  randomUserchoices.push(lowerCaseList)
}

if (userUppercase === true) {
  randomUserchoices.push(upperCaseList)
}

if (userNumeric === true) {
  randomUserchoices.push(numbersList)
  }

  if (userSpecial === true) {
    randomUserchoices.push(specialCharacters)
  }

  if (randomUserchoices.length === 0) {
    randomUserchoices.push(numbersList)
  }

// When the for loop below is completed, the password will be placed here to be returned later
var completedPassword  = ""
// The for loop that generates the password
  for (var i = 0; i < userLength; i++) {
     var randomizedList = gimmeRandom(randomUserchoices); 
    var randomizedCharacter = gimmeRandom(randomizedList);
    completedPassword += randomizedCharacter
    } 

return completedPassword

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

