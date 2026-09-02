const prompt = require("prompt-sync")();
let nombre = prompt("taper le nombre de participant: ");

for(let i = 1; i <= nombre; i++){
    console.log("Participant: ",i)
}