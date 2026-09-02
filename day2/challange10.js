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