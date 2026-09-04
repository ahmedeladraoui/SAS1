const prompt = require("prompt-sync")()

let number = +prompt("taper un nomber: ")

let count = 0

while(true){
    if(number/10 > 0.99){
        number = number / 10
        count++
    }else{
        break
    }
}

console.log("nombre des chiffres: ",count+1)