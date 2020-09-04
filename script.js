
// Assignment Code
var generateBtn = document.querySelector("#generate");

// The function that writes the password to the box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// the function that will gerate the password.
function generatePassword() {
  var password = "";
  var passwordLength = prompt(
    "How many characters for your password? Please enter a number between 8 and 128."
  );

  // The final password variable
  var finalPassword = "";

  // Allowed the user to ONLY select numbers between 8 and 128 for their password length, and alerts them if they chose outside that.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
    return "";
  }

  // Types of characters that can be chosen within the password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var special = "~!@#$%^&*()_+";

  // prompts the user with an okay or cancel for the 4 different character type options.
  var confirmLowerCase = confirm(
    "Would you like to include lowercase letters?");
  var confirmUpperCase = confirm(
    "Would you like to include uppercase letters?");
  var confirmNumber = confirm(
    "Would you like to include numbers?");
  var confirmSpecial = confirm(
    "Would you like to include special characters?");

    // Once confirm is chosen for any character type it adds it to the potential list of characters that will be generated within the password.
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

  // If the user chooses false to all of the options, it alerts them that they need to choose at least one character type.
  if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmSpecial === false &&
    confirmNumber === false
  ) {
    alert("Please select at least one character type.");
    return "";
  }

  // The loop that goes through the chosen variables and randomizes it for the user.
  for (var i = 0; i < passwordLength; i++) {
    var randomizer = Math.floor(Math.random() * password.length);
    finalPassword = finalPassword + password[randomizer];
  }

  // Returns the final resulting password into the box visible to the user.
  return finalPassword;
}

// The event listener, so it starts the code whent eh button is clicked.
generateBtn.addEventListener("click", writePassword);

