// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c",]
var uppercase = ["A", "B", "C",]
var numbers = [1, 2, 3,]
var specialCharacters = ["!", "*", "<"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var newPassword = []
  var characterBank = []
  var passwordLength = parseInt(prompt("How many characters do you want your password to be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters.")
    return
  } 
  var hasLowercase = confirm("Would you like to use lowercase letters?");
  var hasUppercase = confirm("Would you like to use uppercase letters?");
  var hasNumbers = confirm("Would you like to use numbers?");
  var hasSpecialCharacters = confirm("Would you like to use special characters?");
  
  if (hasLowercase) {
    characterBank = characterBank.concat(lowercase);
  }
  if (hasUppercase) {
    characterBank = characterBank.concat(uppercase);
  }
  if (hasNumbers) {
    characterBank = characterBank.concat(numbers);
  }
  if (hasSpecialCharacters) {
    characterBank = characterBank.concat(specialCharacters);
  }
  
  
  return newPassword.join("")

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
