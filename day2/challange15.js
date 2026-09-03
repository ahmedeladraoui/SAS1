const prompt = require("prompt-sync")()

let number = +prompt("taper un nomber: ")

let somme = 0
for(let i = 1; i < number; i++){
    if(6 % i === 0){
        somme += i
    }
}
somme === number ? console.log(`${number} est un nombre parfait`):
console.log(`${number} n'est pas nombre parfait`)