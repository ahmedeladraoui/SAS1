<<<<<<< HEAD
const prompt = require('prompt-sync')()
let age = prompt("taper votre age: ")

if (age >= 18){
    console.log("Acces autorise")
}else{
    console.log("Acces refuse")
=======
const prompt = require("prompt-sync")();
let nombre = prompt("taper le nombre de participant: ");

for(let i = 1; i <= nombre; i++){
    console.log("Participant: ",i)
>>>>>>> a48c0f2 (terminer)
}