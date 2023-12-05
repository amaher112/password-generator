// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = "!#$%&'()*+,.=?/\^|`~<>;-_:@[]{}".split('');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var newPassword = "";
  var characterBank = []
  var passwordLength = parseInt(prompt("How many characters do you want your password to be?"));
 
  // Logic that prompts user to choose a certain number of characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters.")
    return
  } 

  // Prompts to the user
  var hasLowercase = confirm("Would you like to use lowercase letters?");
  var hasUppercase = confirm("Would you like to use uppercase letters?");
  var hasNumbers = confirm("Would you like to use numbers?");
  var hasSpecialCharacters = confirm("Would you like to use special characters?");
  
  // Logic dependent on user responses
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
 
  // Logic creating the random password

for (var i = 0; i < passwordLength; i++){  
  var randomIndex = Math.floor(Math.random() * (characterBank.length - 1) + 1);

  newPassword += characterBank[randomIndex];
 
};

 alert(newPassword);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
