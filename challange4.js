const prompt = require('prompt-sync')()
let montant = Number(prompt("taper le montant: "))
if(montant >= 500){
    console.log("livraison: Gratuite")
    console.log("total payer: ", montant)
}else{
    console.log("livraison: 40 dh")
    console.log("montant payer: ", montant + 40)
}