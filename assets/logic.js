
// Create a character object with properties of password.
var characterObj = {
   lowercase:"abcdefghijklmnopqrstubxyz",
   uppercase:"ABCDEGHIJKLMNOPQRSTUVWXYZ",
   numeric:"1234567890",
   specialCharacter:"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};


// Get the password length and validate it.
var get_pass_len = function(){
   var pass_length = window.prompt("Enter the length of your password (8 to 128 characters)");

    // Validate password length and try again if need to.
    if (pass_length < 8 || pass_length > 128) {
       window.alert("Password can only be 8 to 128 characters long!")
       return get_pass_len();
    }
    else{
       return pass_length
    }
}

// Ask and decide for rest of the criteria of the password 
var confirm_chosen_char = function(){
   
   var character = ""
   var lowercase = window.confirm("Do you want lowercase letters?");
   if (lowercase){
      character += characterObj.lowercase;
   }

   var uppercase = window.confirm("Do you want uppercase letters?");
   if (uppercase) {
      character += characterObj.uppercase;
   }
   var numeric = window.confirm("Do you want numerics?");
   if (numeric) {
      character += characterObj.numeric;
   }
   var special_char = window.confirm("Do you want special characters?");
   if (special_char){
      character += characterObj.specialCharacter;
   }
   // Make sure at least one criteria is chosen
   if (character === "" || character === null){
      window.alert("You need to choose at least one criteria.");
      return confirm_chosen_char();
   }

   return character;
}


// Generate a random number between 0 to max (argument)
var randomNumber = function (max){
   var num = Math.floor(Math.random() * max);
   return num;
}

// Randomly pick and concatanate the characters into a password
var password = function(character, required_length) {
   var empty_pass = ""
   for (var i=0;i<required_length;i++){
      var random_num = randomNumber(character.length - 1);
      empty_pass += character[random_num];
   }
   return empty_pass;
}

// Bring all the functions together and produce the final password
var passwordGenerator = function(){
   var pass_len = get_pass_len();  // get the length of the password
   var characters = confirm_chosen_char(); // find which characters to use
   var pass = password(characters, pass_len); // randomly pick and concatanate the characters
   return pass; // Return the password
}

// Make a reference to the button (btn) div
const btn = document.querySelector(".btn");
// Make a reference to the div where password is displayed
const display = document.querySelector("#password-display");

// add a 'click' event listner and generatePassword() as the event handler for 'btn'
btn.addEventListener('click', () => {
   display.textContent = " ";
   const password = passwordGenerator();
   display.textContent = password;

});


