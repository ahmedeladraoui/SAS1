<<<<<<< HEAD
const prompt = require('prompt-sync')()
let note = +prompt("taper votre note: ")
if(note > 20 || note <0){
    console.log("taper notre note")
}else{
    if (note <10){
        console.log("Échec")
    }else if(note >=10 && note <12){
        console.log("Passable")
    }else if(note >= 12 && note <14 ){
        console.log("Assez bien")
    }else if(note >= 14 && note <16 ){
        console.log("bien")
    }else if(note >= 16 && note <18 ){
        console.log("Très bien")
    }else{
        console.log("Excellent")
    }
}
=======
const prompt = require("prompt-sync")();

let nbr1 = +prompt("Taper un nombre: ");
let nbr2 = +prompt("Taper u=notre nombre: ");

let totalMultiples = 0

for(let i = 1; i <= nbr1; i++){
    if(i % nbr2 === 0){
        console.log( i)
        totalMultiples++
    }
}
console.log("total Multiples: ", totalMultiples)
>>>>>>> a48c0f2 (terminer)
