const passwordBox = document.getElementById("password");
const leng = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "~@#$%^&*()_+-*/}{><|?";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(leng > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

//button.addEventListener("click", createPassword());

function copyPasssword(){
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);

}