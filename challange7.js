const prompt = require('prompt-sync')();
console.log(`
1 → Lundi\n
2 → Mardi\n
3 → Mercredi\n
4 → Jeudi\n
5 → Vendredi\n
6 → Samedi\n
7 → Dimanche
`)
let choix;
let jr = Number(prompt("Enter le nombre: "))

switch(jr){
    case 1: choix = "jour: lundi";break;
    case 2: choix = "jour: mardi";break;
    case 3: choix = "jour: mecredi";break;
    case 4: choix = "jour: jeudi";break;
    case 5: choix = "jour: vendredi";break;
    case 6: choix = "jour: samedi";break;
    case 7: choix = "jour: dimanche";break;
    default: choix = "numero invalide";break;
}
console.log(choix)