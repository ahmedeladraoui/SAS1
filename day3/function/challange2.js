const prompt = require("prompt-sync")()

function calculerAgeChien(ageHumain) {
    return ageHumain * 7
}

let age = prompt("Taper votre age: ")
console.log(calculerAgeChien(age))
