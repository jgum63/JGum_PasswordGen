// Assignment Code
var generateBtn = document.querySelector("#generate");

// These four arrays will be used to construct the password

let lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = ['!', '@', '#', '$', '%', '&', '?']

let builtArray = [];

// This function is what will construct the password

function generatePassword() {

// These four if statements ask the user what they wish their password to be constructed of

  if(confirm("Do you want your password to have lowercase letters?")) {

    builtArray = [...builtArray, ...lowerAlpha];
  } 

  if(confirm("Do you want your password to have uppercase letters?")){

    builtArray = [...builtArray, ...upperAlpha];

  }

  if (confirm("Do you want your password to have numbers?")) {

    builtArray = [...builtArray, ...numbers];
    
  }

  if (confirm("Do you want your password to have special characters?")) {

    builtArray = [...builtArray, ...specialChar];
    
  }

  // This is the for loop that randomly selects from the arrays based upon user answers

  let password = "";
  let passwordLength = prompt("How many characters do you want your password?");
  for (let i = 0; i < passwordLength; i++) {
    

    password += builtArray[Math.floor(Math.random()*builtArray.length)];
  
  
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
