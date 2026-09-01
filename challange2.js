const prompt = require('prompt-sync')()
let nbr = prompt("entrer nombre: ")
if(nbr>0){
    console.log("le nombre est positif")
}else if(nbr < 0){
    console.log("le nombre est negative")
}else{
    console.log("le nombre est egal a zero")
}