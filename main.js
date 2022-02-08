let album = document.querySelector("#album");
let track1 = document.querySelector("#track1");
let track2 = document.querySelector("#track2");
let track3 = document.querySelector("#track3");
let track4 = document.querySelector("#track4");
let track5 = document.querySelector("#track5");
let track6 = document.querySelector("#track6");
let track7 = document.querySelector("#track7");
let track8 = document.querySelector("#track8");

album.addEventListener('click', () => {
    localStorage.setItem('item', '8-Track');
    localStorage.setItem('price', '$11.99');
    popup();
});

track1.addEventListener('click', () => {
    localStorage.setItem('item', track1.getElementsByTagName('span')[0].innerText);    
    localStorage.setItem('price', "$1.29");
    popup();
});
track2.addEventListener('click', () => {
    localStorage.setItem('item', track2.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});
track3.addEventListener('click', () => {
    localStorage.setItem('item', track3.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});
track4.addEventListener('click', () => {
    localStorage.setItem('item', track4.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});
track5.addEventListener('click', () => {
    localStorage.setItem('item', track5.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});
track6.addEventListener('click', () => {
    localStorage.setItem('item', track6.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});
track7.addEventListener('click', () => {
    localStorage.setItem('item', track7.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});
track8.addEventListener('click', () => {
    localStorage.setItem('item', track8.getElementsByTagName('span')[0].innerText);
    localStorage.setItem('price', "$1.29");
    popup();
});

function popup() {
    document.querySelector(".popup-menu").style.display = "inline";
    document.querySelector(".overlay").style.display = "inline";
}

function closePopUp() {
    document.querySelector(".popup-menu").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}
