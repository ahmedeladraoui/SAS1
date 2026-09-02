const prompt = require("prompt-sync")();

let base = +prompt("Entrer la base: ")
let exp = +prompt("entrer la exposant: ")
let resl = 1
let i = 0
while(i<exp){
    resl = resl * base
    i++

}
console.log("resultat: ",resl)