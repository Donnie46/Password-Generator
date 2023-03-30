// Get references to the DOM elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Generate a new password
function writePassword() {
  // Prompt user for pass criteria
  var passwordLength = prompt("How many characters would you like your password to be?");
  var includeLowercase = confirm("Would you like to include lowercase letter?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumeric = confirm("Would you like to include numbers?");
  var includeSpecial = confirm("Would you like to include special characters?");

  //validate user input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 chanracters.");
    return;
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;
  }

  // Generate password based on selected criteria
  var password = "";
  var characterSet = "";

  if(includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if(includeUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(includeSpecial) {
    characterSet += "!@#$%^&*()_+-=[]{}|;':<>.,~`";
  }
  if(includeNumeric) {
    characterSet += "0123456789";
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = (Math.random() * characterSet.length) | 0;
    // password = password + characterSet[randomIndex];
    password += characterSet[randomIndex];
  }
  passwordText.value = password;
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);
