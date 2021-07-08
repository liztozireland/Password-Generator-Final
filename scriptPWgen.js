// Assignment Code
var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let masterArray = [];


function generatePassword () {
  let passwordLength = prompt("How many charactes do you want in your password? Password must be between 8 and 128 characters.")
  passwordLength=parseInt(passwordLength)
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return alert("Please choose a number between 8 and 128.");
    }
  
  let useLowerCase = confirm ("Would you like to use lowercase letters?");
  if (useLowerCase === true) {
    masterArray = masterArray.concat (lowerCase);
  } 
let useUpperCase = confirm ("Would you like to use uppercase letters?");
if (useUpperCase === true) {
  masterArray = masterArray.concat (upperCase);
}
let useNumbers = confirm("Would you like to use numbers?");
  if (useNumbers === true) {
    masterArray = masterArray.concat (numbers);
  }
let useSpecialCharacters = confirm("Would you like to use special characters?"); 
  if (useSpecialCharacters === true) {
  masterArray = masterArray.concat (specialCharacters);
}
if (useLowerCase === false && useUpperCase === false && useNumbers === false && useSpecialCharacters === false) {
  return alert("Not working.")
}
let newPassword = "";
for (let i = 0; i < passwordLength; i++) {
newPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
console.log(Math.floor(Math.random() * (masterArray.length)));
console.log(newPassword);
}
return newPassword
}
