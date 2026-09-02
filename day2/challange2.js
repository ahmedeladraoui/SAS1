const prompt = require("prompt-sync")();

let nombre = prompt("taper nombre: ")

for(let i = 1; i <= nombre; i++){
    if(i%2 === 0){
        console.log(i)
    }
}