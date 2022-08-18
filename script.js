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

var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","@","$","%","^","&","*","(",")"];
var availableChar = [];

function generatePassword() {
  var length = prompt("Select length of password in characters");
  if(length >= 8 && length < 128) {
    var includeLower = prompt("Would you like to include lowercase letters?").toUpperCase();
    if (includeLower === "YES") {
      availableChar = availableChar.concat(lowerLetters);
      alert("You chose to include lowercase letters");
    }
    else {
      alert("You chose not to include lowercase letters");
    }
  
    var includeUpper = prompt("Would you like to include uppercase letters?").toUpperCase();
    if(includeUpper === "YES")  {
      availableChar = availableChar.concat(upperLetters);
      alert("You chose to include uppercase letters");
    }
    else {
      alert("You chose not to include uppercase letters");
    }
  
    var includeNumber = prompt("Would you like to include numbers?").toUpperCase();
    if(includeNumber === "YES") {
      availableChar = availableChar.concat(numbers);
      alert("You chose to include numbers");
    }
    else {
      alert("You chose not to include numbers");
    }
  
    var includeSpecial = prompt("Would you like to include special characters?").toUpperCase();
    if(includeSpecial === "YES") {
      availableChar = availableChar.concat(specialCharacters);
      alert("You chose to include special characters");
    }
    else {
      alert("You chose not to include special characters");
    }

    // now actually generate the password

    var emptyString = "";
    var getRandomChar = availableChar[Math.random() * availableChar.length];
    var randomChar = getRandomChar;

    while(emptyString.length > 6) {
      emptyString += randomChar;
      emptyString ++;
    }
    console.log(emptyString);


  }
  else {
    alert("Invalid input");
  }
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