const prompt = require("prompt-sync")()

let number = +prompt("Taper un nombre: ")
let nvnbr = 0;
let lastnbr = 0

while(number > 0){
    lastnbr = number % 10
    nvnbr = (nvnbr * 10) + lastnbr
    number = (number - lastnbr)/10
    
}

console.log(nvnbr)