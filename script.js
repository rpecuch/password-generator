var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","@","$","%","^","&","*","(",")"," ","#","'","+","-",".","/",":",";","<","=",">","?","[","]","_","`","{","}","|","~"];
var availableChar = [];

function generatePassword() {
  var length = prompt("Select length of password in characters (at least 8 and no more than 128):");
  if(length >= 8 && length < 128) {
    var includeLower = prompt("Would you like to include lowercase letters? Type 'Yes' or 'No'.").toUpperCase();
    if (includeLower === "YES") {
      availableChar = availableChar.concat(lowerLetters);
      alert("You chose to include lowercase letters!");
    }
    else {
      alert("You chose not to include lowercase letters.");
    }
  
    var includeUpper = prompt("Would you like to include uppercase letters? Type 'Yes' or 'No'.").toUpperCase();
    if(includeUpper === "YES")  {
      availableChar = availableChar.concat(upperLetters);
      alert("You chose to include uppercase letters!");
    }
    else {
      alert("You chose not to include uppercase letters.");
    }
  
    var includeNumber = prompt("Would you like to include numbers? Type 'Yes' or 'No'.").toUpperCase();
    if(includeNumber === "YES") {
      availableChar = availableChar.concat(numbers);
      alert("You chose to include numbers!");
    }
    else {
      alert("You chose not to include numbers.");
    }
  
    var includeSpecial = prompt("Would you like to include special characters? Type 'Yes' or 'No'.").toUpperCase();
    if(includeSpecial === "YES") {
      availableChar = availableChar.concat(specialCharacters);
      alert("You chose to include special characters!");
    }
    else {
      alert("You chose not to include special characters.");
    }

    if(includeLower === "NO" && includeUpper === "NO" && includeNumber === "NO" && includeSpecial === "NO") {
      alert ("Error, please answer 'Yes' to one of the questions.");
    }
    else {
      function generateString() {
        var emptyString = "";
        for(var i=0;i<length;i++) {
        emptyString += availableChar[Math.floor(Math.random() * availableChar.length)];
      } 
        alert("This is your password: " + emptyString);
      }
      generateString();
    }
  }
  else {
    alert("Invalid input. Please select a length of at least 8 characters and no more than 128 characters.");
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