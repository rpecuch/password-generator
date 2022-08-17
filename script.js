// Assignment plan:
// user clicks button which runs the function
// user prompted to select length of password 
  // length between 8 and 128 char
// user prompted to select types of characters to include (series of prompts)
  // lowercase
  // uppercase
  // numeric
  // special characters
  // required to select at least one type
  // input validated after each prompt
// password is generated either in alert or written on page

function generatePassword() {
  var length = prompt("Select length of password in characters");
  if(length < 8 || length > 128) {
    alert("Must be between 8 and 128 characters");
    return;
  }// could modify this part so password only generates if correct length
  //and not run if not and just have an else that says invalid input


// need to place these somewhere else
  var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperLetters = lowerLetters.toUpperCase();
  var numbers = [1,2,3,4,5,6,7,8,9];
  var specialCharacters = ["!","@","$","%","^","&","*","(",")"];
  var availableChar = [];

  var includeLower = confirm("Would you like to include lowercase letters?");
  if (includeLower) {
    availableChar = availableChar.concat(lowerLetters);
  }
  
  var includeUpper = confirm("Would you like to include uppercase letters?");
  if(includeUpper) {
    availableChar = availableChar.concat(upperLetters);
  }
  
  var includeNumber = confirm("Would you like to include numbers?");
  if(includeNumber) {
    availableChar = availableChar.concat(numbers);
  }
  
  var includeSpecial = confirm("Would you like to include special characters?");
  if(includeSpecial) {
    availableChar = availableChar.concat(specialCharacters);
  }

  var randomChar = availableChar[Math.random() * availableChar.length];

  // now actually generate the password

  // for (var i=0, i < length; i++) {
  //   print(randomChar);
  // }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);