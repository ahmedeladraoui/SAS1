const prompt = require("prompt-sync")()

let number = +prompt("Taper un nombre: ")

let origin = number
let nvnbr = 0
let lastnbr = 0

while(number > 0){
    lastnbr = number % 10
    nvnbr = (nvnbr * 10) + lastnbr
    number = (number - lastnbr) / 10
    
   
}
nvnbr === origin ? console.log("palindrome") : console.log("pas palindrome")
