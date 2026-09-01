const prompt = require('prompt-sync')();

console.log(`
1 → Bus
2 → Train
3 → Tramway
4 → Taxi
5 → Vélo
`)
const choix = +prompt("enter votre choix: ");
let resl;

switch(choix){
    case 1:resl = 'transport: Bus\n Prix: 5 DH';break;
    case 2:resl = 'transport: Train\n Prix: 20 DH';break;
    case 3:resl = 'transport: Tramway\n Prix: 6 DH';break;
    case 4:resl = 'transport: Taxi\n Prix: 15 DH';break;
    case 5:resl = 'transport: Vélo\n Prix: 10 DH';break;
    default:resl = 'Transport invalide';
}
console.log(resl)