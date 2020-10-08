// Assignment code here
let randomGenerate = function(low, high) {
  return (Math.floor(Math.random()*(high - low + 1)) + low);
}

let randomCharAssign = function(charArray, passLength, currentPass) {
  while (passLength > 0) {
    currentPass += charArray[randomGenerate(0, charArray.length)];
    passLength --;
  }
  return currentPass;
}

let generatePassword = function() {
  let numOfChars = -1;
  while (!((numOfChars >= 8 && numOfChars <= 128) || numOfChars === 0)) {
    numOfChars = +window.prompt("How many characters do you need?\n(type a number from 8-128, type 0 to exit)");
    if (!((numOfChars >= 8 && numOfChars <= 128) || numOfChars === 0)) {
      window.alert("Please input a valid selection");
    };
  };
  if (numOfChars >= 8) {
    let typeOfChars = -1;
    while (!(typeOfChars >= 0 && typeOfChars <= 5 )) {
      typeOfChars = +window.prompt("What kind of characters do you want?\n1. All upper and lower case numbers\n2. Alpha-Numeric (letters and numbers)\n3. Letters and Special Characters\n4. Numbers and Specials\n5. Alpha-Numberic and Special Characters\n(type 0 to escape)");
      if (!(typeOfChars >= 0 && typeOfChars <= 5 )) {
        window.alert("Please input a valid selection");
      }
    }
    let charset;
    switch (Number.parseInt(typeOfChars)) {
      case 1: //Letters
        charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
        break;
      case 2: //Alpha-numerics
        charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ123456789";
        break;
      case 3: //Letters and Specials
        charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        break;
      case 4: //Numbers and Specials only
        charSet = "123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        break;
      case 5: //UPPER, lower, numbers and Special
        charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ123456789 !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        break;
    };

    return randomCharAssign(charSet, numOfChars, "");
  };
  
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
