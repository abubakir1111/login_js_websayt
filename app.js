const red1 = document.querySelector(".red1");
const red2 = document.querySelector(".red2");
const red3 = document.querySelector(".red3");
const add = document.querySelector(".add");
const result = document.querySelector(".result");
const otish = document.querySelector(".otish");
const ot = document.querySelector(".ot");

add.addEventListener("click", () => {
    const email = document.querySelector(".email").value;
    const pass1 = document.querySelector(".pass1").value;
    const pass2 = document.querySelector(".pass2").value;

    if (pass1 !== pass2) {
        result.textContent = "Parollar bir biriga mos kelmaydi";
        red1.textContent = ""; 
        red2.textContent = ""; 
        red3.textContent = ""; 
    ot.textContent = "satimga ota olmaysiz"; 

        return; 
    } 

    if (pass1 === "" || pass2 === "") {
        red1.textContent = "Requerd";
        red2.textContent = "Requerd";
        red3.textContent = "Requerd";
        result.textContent = "Parolni kiritmadingiz";
        return; 
    } 

    if (email === "") {
        result.textContent = "Siz emailni kiritmadingiz";
        return;
    } 

    if (email !=="@") { 
        result.textContent = "Siz emailni to'g'ri kiritmadingiz"; 
        return; 
    } 

    red1.style.color = "blue"; 
    red1.textContent = "True"; 
    otish.textContent = "saytimga oting"; 
    result.textContent = "Parollar to'g'ri"; 
});
