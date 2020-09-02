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

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowerCaseEl = document.getElementById('lowercase');
const upperCaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('number');
const specialEl = document.getElementById('special');


const randomFunc = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  special: getRandomSpecial,
};

function getRandomLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getRandomUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getRandomSpecial() {
  return special[Math.floor(Math.random() * special.length)];
}