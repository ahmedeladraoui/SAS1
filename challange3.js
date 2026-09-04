<<<<<<< HEAD
const prompt = require('prompt-sync')()
let note = prompt("taper votre note: ")
if(note >20 || note < 0){
    console.log("taper notre note")
}else{
    if(note >=10){
        console.log("admis")
    }else{
        console.log("non admis");
        
    }
}
=======
const prompt = require("prompt-sync")();

let nbr = +prompt("Taper nombre: ");
let somme = 0;
for(let i = 1; i <= nbr; i++){
    somme += i
}
console.log("Somme  = ",somme)
>>>>>>> a48c0f2 (terminer)
