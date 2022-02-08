let fullName = document.querySelector("#name");
let username = document.querySelector("#username"); 
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let confirmPassword = document.querySelector("#confirmPassword");

let usernameAlert = document.querySelector(".usernameCheck");
let passwordAlert = document.querySelector(".passwordCheck");
let confirmPasswordAlert = document.querySelector(".confirmPasswordCheck");
let formButton = document.querySelector("#formButton");

password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkConfirmPassword);
formButton.addEventListener('click', checkForm);

function checkPassword(input) {
    if (input.target.value.length < 8) {
        passwordAlert.style.display = "inline";
    } else {
        passwordAlert.style.display = "none";
    }
}

function checkConfirmPassword(input) {
    if (input.target.value != password.value) {
        confirmPasswordAlert.style.display = "inline";
    } else {
        confirmPasswordAlert.style.display = "none";
    }
}

function checkForm() {
    if (username.value == "") {
        usernameAlert.style.display = "inline";
    } else if (password.value >= 8 || confirmPassword.value == password.value) {     
        
        localStorage.setItem("fullName", fullName.value); 
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);

        window.location.href = "confirm.html"
    } 
}