<<<<<<< HEAD
const prompt = require('prompt-sync')();
console.log(`
A → Électronique
B → Vêtements
C → Alimentation
D → Maison
E → Sport
`)
let ctgr = prompt("entrer votre chois: ").toUpperCase()
let resl;

switch(ctgr){
    case 'A': resl = 'Code : A\nCatégorie : Électronique';break;
    case 'B': resl = 'Code : B\nCatégorie : Vêtements';break;
    case 'C': resl = 'Code : C\nCatégorie : Alimentation';break;
    case 'D': resl = 'Code : D\nCatégorie : Maison';break;
    case 'E': resl = 'Code : E\nCatégorie : Sport';break;
    default: resl = 'Catégorie inconnue.';
}
console.log(resl);
=======
const prompt = require("prompt-sync")();

let somme = 0
let tnbr = 0
while(true){
    let number = +prompt("Taper un nombre: ")
    if(number === 0){
        break
    }
    somme += number
    tnbr++
}
console.log(`Nombre de valeur: ${tnbr}\nsomme: ${somme}`)
>>>>>>> a48c0f2 (terminer)
