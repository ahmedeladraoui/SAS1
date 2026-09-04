<<<<<<< HEAD
const prompt = require('prompt-sync')()
let nbr = prompt("entrer nombre: ")
if(nbr>0){
    console.log("le nombre est positif")
}else if(nbr < 0){
    console.log("le nombre est negative")
}else{
    console.log("le nombre est egal a zero")
=======
const prompt = require("prompt-sync")();

let nombre = prompt("taper nombre: ")

for(let i = 1; i <= nombre; i++){
    if(i%2 === 0){
        console.log(i)
    }
>>>>>>> a48c0f2 (terminer)
}