// Assignment code here


var randomGenerateLetter = function () {
  return Math.floor(Math.random() * 26);
};
let getRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
let getRandomLower = function() {
  return String.fromCharCode(randomGenerateLetter() + 97);
}
let getRandomUpper = function() {
  return String.fromCharCode(randomGenerateLetter() + 65);
}
let getRandomSymbol = function() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
lower: getRandomLower(),
upper: getRandomUpper(),
number: getRandomNumber(),
symbol: getRandomSymbol(),
}
console.log(randomFunc);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Defining generatePassword function
function generatePassword() {
  let password = "";
  //prompting the user with password requirements
  var length = prompt("Please enter the number of characters you want for your new password. Characters must be more than 8 but fewer than 128");
    if (length < 8 || length > 128){
      window.alert("Please input a number that is more than 8 but fewer than 128");
      generatePassword();
    }
  //lowercase, uppercase, numbers, special characters
  var lowerCase = confirm("Do you want lowercase characters in your password?");
  var upperCase = confirm("Do you want uppercase characters in your password?");
  var numbers = confirm("Do you want numeric characters in your password?");
  var special = confirm("Do you want special characters in your password?");  
  
  const typesCount = lowerCase + upperCase + numbers + special;

  const typesArr = [{lowerCase}, {upperCase}, {numbers}, {special}].filter(item => Object.values(item)[0]);
  //validate input and at least one character type is being selected, can not return null
  if(typesCount === 0){
    window.alert("Please include one criteria for your password");
    generatePassword();
  }
  //generate password

  for (i = 0; i < parseInt(length); i += typesCount){
    typesArr

    };

  //display generated password
  //return generatedPassword;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
