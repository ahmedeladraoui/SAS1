const prompt = require("prompt-sync")()

let number = prompt("Taper un nombre: ")

let lastnbr = 0
let somme = 0

while(number > 0){
    lastnbr = number % 10
    number = (number - lastnbr) / 10
    somme += lastnbr
}
console.log(somme)