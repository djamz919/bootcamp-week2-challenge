// Function to ask user to input password length
var getLength = function (length) {
  // !!!NEED FUTURE LOGIC FOR NOT ACCEPTING NON-NUMBERS!!!
  while (length === null || length === "" || length < 8 || length > 128 || isNaN(length)) {
    length = window.prompt('How many characters would you like in the password?');
    console.log(parseInt(length));
    if (length === null || length === "" || length < 8 || length > 128  || isNaN(length)) {
      window.alert('Please enter a value at least 8 and no more than 128');
      console.log(parseInt(length));
    }
  }
  return length;
}

// Funciton to ask user what type of character types to include in the password
var getCharTypes = function (charType) {
  return (window.confirm('Would you like to use ' + charType + '?'));
}

// Function to add letters to password (lowercase and uppercase)
var addLetter = function (pwd, small) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var index = Math.floor(Math.random() * 26);
  console.log(index);
  if (small) {
    pwd = pwd + letters[index];
  } else {
    pwd = pwd + letters[index].toUpperCase();
  }
  console.log(pwd);
  return pwd;
}

// Function to add a number to passworwd
var addNumber = function (pwd) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var index = Math.floor(Math.random() * 10);
  console.log(index);
  pwd = pwd + nums[index];
  console.log(pwd);
  return pwd;
}

// Function to add special characters to passworwd
var addSpecialChar = function (pwd) {
  const chars = ['!', '@', '#', '$', '%', '^', '&', '*'];
  var index = Math.floor(Math.random() * 8);
  console.log(index);
  pwd = pwd + chars[index];
  console.log(pwd);
  return pwd;
}

// Main function for generating password
var generatePassword = function () {
  // Create object to hold all criteria variables
  var criteria = {
    length: 0,
    characters: [
      false, false, false, false
    ]
  }
  var finalPwd = '';

  // Get and set password length
  criteria.length = getLength(criteria.length);
  console.log(criteria.length);

  // Get character types to put in password
  while(criteria.characters[0] === false && criteria.characters[1] === false && criteria.characters[2] === false && criteria.characters[3] === false){
    criteria.characters[0] = getCharTypes('lowercase characters');
    criteria.characters[1] = getCharTypes('uppercase characters');
    criteria.characters[2] = getCharTypes('numbers');
    criteria.characters[3] = getCharTypes('special characters');
    console.log(criteria.characters);
    if(criteria.characters[0] === false && criteria.characters[1] === false && criteria.characters[2] === false && criteria.characters[3] === false){
      window.alert("You did not select any of the criteria!");
    }
  }

  // Begin creating password
  for (var i = 0; i < criteria.length; i++) {
    var type = false;
    var index = -1;
    while (type === false) {
      index = Math.floor(Math.random() * 4);
      type = criteria.characters[index];
    }
    console.log(index);
    // Use switch case to add a character 
    switch (index) {
      case 0:
        finalPwd = addLetter(finalPwd, true); //lowercase
        break;
      case 1:
        finalPwd = addLetter(finalPwd, false); //uppercase
        break;
      case 2:
        finalPwd = addNumber(finalPwd); //numer
        break;
      case 3:
        finalPwd = addSpecialChar(finalPwd); //special characters
    }
  }

  return finalPwd;
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