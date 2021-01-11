const empty = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*-_";

const lengthCheck = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbol");
const submit = document.getElementById("submit");

const copy = document.getElementById("copy");

const password = document.getElementById("password");

submit.addEventListener("click", () => {
  let initialPassword = empty;
  uppercaseCheck.checked ? (initialPassword += upperCase) : "";
  lowercaseCheck.checked ? (initialPassword += lowerCase) : "";
  numberCheck.checked ? (initialPassword += number) : "";
  symbolCheck.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(lengthCheck.value, initialPassword);
});

//FUNCTION TO LOOP THROUGH CHECKED INPUTS AND GENERATE RANDOM PASSWORD
function generatePassword(l, initialPassword) {
  let pass = "";

  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }

  return pass;
}

//COPY GENERATED PASSWORD TO CLIPBOARD
copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("Generate a password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("copied");
  }
});
