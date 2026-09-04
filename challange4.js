<<<<<<< HEAD
const prompt = require('prompt-sync')()
let montant = +prompt("taper le montant: ")
if(montant >= 500){
    console.log("livraison: Gratuite")
    console.log("total payer: ", montant)
}else{
    console.log("livraison: 40 dh")
    console.log("montant payer: ", montant + 40)
=======
const prompt = require("prompt-sync")();

let nbr = +prompt("taper un nombre: ");

for(let i = 1; i <= 10; i++){
    console.log(nbr , " x " , i, ' = ', 7*i)
>>>>>>> a48c0f2 (terminer)
}