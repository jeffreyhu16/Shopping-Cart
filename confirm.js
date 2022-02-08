document.querySelector(".confirmation-page").style.display = "inline";
document.querySelector(".overlay").style.display = "inline";

let confirmedName = document.querySelector("#confirmedName");
let confirmedUsername = document.querySelector("#confirmedUsername");
let confirmedEmail = document.querySelector("#confirmedEmail");

let item = document.querySelector("#item");
let itemPrice = document.querySelector("#price");
let totalPrice = document.querySelector('.total-price');

confirmedName.value = localStorage.getItem('fullName');
confirmedUsername.value = localStorage.getItem('username');
confirmedEmail.value = localStorage.getItem('email');

item.textContent = localStorage.getItem('item');
itemPrice.textContent = localStorage.getItem('price');
totalPrice.textContent = 'Order Total : ' + localStorage.getItem('price');

function closePopUp() {
    document.querySelector(".confirmation-page").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}
