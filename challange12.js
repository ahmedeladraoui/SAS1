const prompt = require("prompt-sync")()

let number = +prompt("Taper un nombre: ")
let nbrDvs = 0

for(let i = 1; i <= number; i++){
    if(number % i === 0){
        console.log(`diviseur: ${i}: ${12/i}`)
        nbrDvs++
    }
}
console.log(`Nombre de diviseur: ${nbrDvs}`)