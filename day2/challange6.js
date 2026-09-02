const prompt = require("prompt-sync")();

let nbr = +prompt("taper un nombre: ")

let stop = 0
while(true){
    if(stop <=nbr){
        console.log(nbr - stop)
        stop++
    }else{
        break
    }
}