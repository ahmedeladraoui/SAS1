<<<<<<< HEAD
const prompt = require('prompt-sync')();

let nbr1 = +prompt("Enter le premier nombre: ");
let oprt = prompt("entrer l'opiration (+ - / *): ");
let nbr2 = +prompt("entrer le deuxieme nombre: ")
let resl;
switch(oprt){
    case '+': resl = nbr1 + nbr2 ;break;
    case '-': resl = nbr1 - nbr2 ;break;
    case '*': resl = nbr1 * nbr2 ;break;
    case '/': resl = nbr2 == 0 ? 'taper notre nombre ' : (nbr1 / nbr2);break;
    default: resl = 'Opérateur invalide'
}
console.log(resl)
=======
const prompt = require("prompt-sync")();

let nbr = +prompt("Taper le nombre de mission: ");

let i = 1;

while(i<=nbr){
    console.log(`mession ${i} => score: ${i*100}`)
    i++
}
>>>>>>> a48c0f2 (terminer)
