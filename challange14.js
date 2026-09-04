const prompt = require("prompt-sync")()

let number = +prompt("taper un nomber: ")

let sommePairs = 0
let sommeImpairs = 0

for(let i = 1; i <= number; i++){
    if(i % 2 === 0){
        sommePairs += i
        
    }else{
        sommeImpairs += i
    }
}

console.log("Somme des pairs: ",sommePairs)
console.log("somme des impairs: ",sommeImpairs)