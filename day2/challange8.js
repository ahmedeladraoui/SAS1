const prompt = require("prompt-sync")();

let nbr = +prompt("Taper le nombre de mission: ");

let i = 1;

while(i<=nbr){
    console.log(`mession ${i} => score: ${i*100}`)
    i++
}