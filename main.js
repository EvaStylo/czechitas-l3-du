// tady je místo pro náš program

let osoba = document.querySelector('.uzivatel');

let jmeno = prompt('Zadej jméno');
let prijmeni = prompt('Zadej příjmení');
let vek = Number(prompt('Zadej věk'));
let barva = prompt('Zadej svoji oblíbenou barvu - anglicky');

const vystup = (jmeno + ' ' + prijmeni + ' ' + vek);

osoba.style.color = barva;
osoba.style.fontStyle = "italic";

osoba.innerHTML = vystup;



