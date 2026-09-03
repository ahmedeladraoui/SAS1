const prompt = require("prompt-sync")()

let number = +prompt("Taper un nombre: ")
let count = 0
for(let i = 2; i<=number; i++){
    if(number % i === 0){
        count++
    }
}
count > 2 ? console.log(`${number} n'est pas un nombre premier`) : console.log(`${number} est un nombre premier`)