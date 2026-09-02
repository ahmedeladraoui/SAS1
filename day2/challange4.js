const prompt = require("prompt-sync")();

let nbr = +prompt("taper un nombre: ");

for(let i = 1; i <= 10; i++){
    console.log(nbr , " x " , i, ' = ', 7*i)
}