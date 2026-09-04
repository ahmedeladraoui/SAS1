const prompt = require("prompt-sync")()

let number = prompt("Taper un nombre: ")
let bool = true
let count = 0;

for(let i = 1; i <= number; i++){
    
    count = 0
    for(let j = 1; j <= i/2; j++){
        if(i % j == 0){
            count += j
        }
    }
    if(count == i){
        console.log(i)
    }
}