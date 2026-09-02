const prompt = require("prompt-sync")()

let number = +prompt("Taper un nombre: ")
let nbr = number
let resl = 1
for(let i = 1; i <= nbr; i++){
    resl *= i
}
console.log(`${nbr}! = ${resl}`)