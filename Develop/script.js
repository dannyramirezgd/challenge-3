// Assignment code here
//const resultEl = document.getElementById('result');
//const lengthEl = document.getElementById('length');
//const uppercaseEl = document.getElementById('uppercase');
//const lowercaseEl = document.getElementById('lowercase');
//const numbersEl = document.getElementById('numbers');
//const symbolsEl = document.getElementById('symbols');
//const generateEl = document.getElementById('generate');
//const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUppper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

var randomGenerateLetter = function () {
  return Math.floor(Math.random() * 26);
};
var getRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomLower() {
  return String.fromCharCode(randomGenerateLetter() + 97);
}
function getRandomUppper() {
  return String.fromCharCode(randomGenerateLetter() + 65);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUppper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for your new password. It must be more than 8 but fewer than 128"
  );
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");
}
//I am so confused about this
//why isn't it add to git???
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
