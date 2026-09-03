const prompt = require("prompt-sync")()

let n = prompt("taper un nombre (ex: 1 4 6 7 8): ")

let nvnbr = n.split(' ')

function additionnerTout(...args){
    let somme = 0
    for(let i = 0 ; i < args.length; i++){
        somme = somme + Number(args[i])
    }
    return somme;
}


console.log(additionnerTout(...nvnbr))


