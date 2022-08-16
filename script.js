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


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    var length = prompt("Select length of password in characters");
    if(length < 8 || length > 128) {
      alert("Must be between 8 and 128 characters");
      return;
    }
    var lower = prompt("Would you like to include lowercase letters?");
    if (lower != "yes" && lower != "no") {
      alert("Please type yes or no");
      return;
    }
    var upper = prompt("Would you like to include uppercase letters?");
    if (upper != "yes" && upper != "no") {
      alert("Please type yes or no");
      return;
    }
    var number = prompt("Would you like to include numbers?");
    if (number != "yes" && number != "no") {
      alert("Please type yes or no");
      return;
    }
    var special = prompt("Would you like to include special characters?");
    if (special != "yes" && special != "no") {
      alert("Please type yes or no");
      return;
    }
    // now actually generate the password
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);