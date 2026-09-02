const prompt = require("prompt-sync")();

let nbr1 = +prompt("Taper un nombre: ");
let nbr2 = +prompt("Taper u=notre nombre: ");

let totalMultiples = 0

for(let i = 1; i <= nbr1; i++){
    if(i % nbr2 === 0){
        console.log( i)
        totalMultiples++
    }
}
console.log("total Multiples: ", totalMultiples)