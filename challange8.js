const prompt = require('prompt-sync')();

let nbr1 = Number(prompt("Enter le premier nombre: "));
let oprt = prompt("entrer l'opiration (+ - / *): ");
let nbr2 = Number(prompt("entrer le deuxieme nombre: "))
let resl;
switch(oprt){
    case '+': resl = nbr1 + nbr2 ;break;
    case '-': resl = nbr1 - nbr2 ;break;
    case '*': resl = nbr1 * nbr2 ;break;
    case '/': resl = nbr2 == 0 ? 'taper notre nombre ' : (nbr1 / nbr2);break;
    default: resl = 'Opérateur invalide'
}
console.log(resl)