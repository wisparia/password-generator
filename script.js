// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Strings for each character type to pull from
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "1234567890".split("");
var special = "~!@#$%^&*()_+".split("");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomLowerCase () {
  return lowerCase
}

function getRandomUpperCase () {
  return upperCase
}

function getRandomLowerCase () {
  return numbers
}

function getRandomLowerCase () {
  return special
}