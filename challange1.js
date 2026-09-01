const prompt = require('prompt-sync')()
let age = prompt("taper votre age: ")

if (age >= 18){
    console.log("Acces autorise")
}else{
    console.log("Acces refuse")
}