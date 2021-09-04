// Assignment code here
var length = Math.floor(Math.random() *100+1)
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()<>?"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  window.alert
  var text;
  var questionLength = prompt("How long would you like your password to be?", "Must be 8-128 characters");
  if(questionLength < 8 || questionLength > 128) {
    alert("Must be between 8-128 characters")
  }else {
    alert("Thank you.")
    console.log(questionLength)
  }
  var questionChar = prompt("Would you like your password to include lowercase, uppercase, numeric, and/or special characters?");
  if(questionChar === 'lowercase' || questionChar === 'uppercase' || questionChar === 'numeric' || questionChar === 'special characters'){
    alert("Thank you.")
    console.log(questionChar)
  }else{
    alert("Must include lowercase, uppercase, numeric, or special characters.")
  }
  return(questionLength)
}
// Write password to the #password input
function writePassword() {
var password = generatePassword();
  var passwordText = document.querySelector("#password");

 if(lower){
   lower* questionLength*Math.random
 }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
