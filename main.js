const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefjhijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#%$^&*(){}<>/-=";

const allChars = upperCase + lowerCase + number + symbol;


function randomGen() {

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (length > password.length) {

        password += allChars[Math.floor(Math.random() * allChars.length)];

    }

    passwordBox.value = password;

}

function copyPass() {

    passwordBox.select();
    document.execCommand("copy");
}
