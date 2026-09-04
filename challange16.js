const prompt = require("prompt-sync")()

let scrNbr = 20

while(true){
    let number = +prompt("taper un nomber: ")
    if(number > scrNbr){
        console.log("Trop grand")
    }else if(number < scrNbr){
        console.log("Trop petit")
    }else{
        console.log("Bravo!")
        break
    }
}