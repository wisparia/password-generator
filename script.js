// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var passwordText = document.querySelector("#password");

// var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// var number = "1234567890".split("");
// var special = "~!@#$%^&*()_+".split("");

//   passwordText.value = password;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function writePassword(onclick = generateBtn){
// var passwordLength = prompt("How many characters would you like? Please enter a number between 8 and 128.");

// let passwordLength = "";

// if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
//   alert("Please choose a number between 8 and 128.")
//   return;
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var passwordLength = prompt(
    "How many characters for your password? Please enter a number between 8 and 128."
  );

  var finalPassword = "";

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
    return "";
  }

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var special = "~!@#$%^&*()_+";

  var confirmLowerCase = confirm(
    "Would you like to include lowercase letters?");
  var confirmUpperCase = confirm(
    "Would you like to include uppercase letters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include special characters?");

  if (confirmLowerCase == true) {
    password = password + lowerCase;
  }
  if (confirmUpperCase == true) {
    password = password + upperCase;
  }
  if (confirmNumber == true) {
    password = password + number;
  }
  if (confirmSpecial == true) {
    password = password + special;
  }

  // if (
  //   confirmLowercase === false &&
  //   confirmUppercase === false &&
  //   confirmSpecial === false &&
  //   confirmNumber === false
  // ) {
  //   alert("Please select at least one character type.");
  //   return ;
  // }


  for (var i = 0; i < passwordLength; i++) {
    var randomizer = Math.floor(Math.random() * password.length);
    finalPassword = finalPassword + password[randomizer];
  }

  return finalPassword;
}
generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button
