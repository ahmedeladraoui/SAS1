<<<<<<< HEAD
const prompt = require('prompt-sync')();
console.log(`
1 → Pizza
2 → Burger
3 → Tacos
4 → Salade
`)
let chois = +prompt("Entrer votre chois: ");

let plt;
let prx;
let chek = true
let rdc;
switch(chois){
    case 1 : plt = 'Pizza';prx = 60;break;
    case 2 : plt = 'Burger';prx = 45;break;
    case 3 : plt = 'Tacos';prx = 40;break;
    case 4 : plt = 'Salade';prx = 30;break;
    default: chek = false;
}
if(chek){
    let qnt = +prompt("la quantite: ")
    let total = qnt*prx;
    let totalPay = 0;

    if(total >= 200){
        rdc = total * (10/100)
        totalPay = total - rdc
    }else{
        rdc = 0
        totalPay = total
    }

    let aff = `
    Plat: ${plt}
    Prix unitaire: ${prx} DH
    Sous-total: ${total} DH
    Réduction: ${rdc} DH
    Total à payer : ${totalPay} DH
    `
    console.log(aff)
}else{
    console.log("votre chois invalide")
}
=======
const prompt = require("prompt-sync")()

let number = +prompt("Taper un nombre: ")
let nbr = number
let resl = 1
for(let i = 1; i <= nbr; i++){
    resl *= i
}
console.log(`${nbr}! = ${resl}`)
>>>>>>> a48c0f2 (terminer)
