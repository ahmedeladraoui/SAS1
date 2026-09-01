const prompt = require('prompt-sync')();
console.log(`
1 → Afficher le profil\n
2 → Afficher les parametres\n
3 → Afficher les notifications\n
4 → Se déconnecter\n
`)
let menu;
let choix = Number(prompt("Entrer votre choix: "))
switch(choix){
    case 1: menu = 'Ouverture votre profile';break;
    case 2: menu = 'Ouverture des parametres';break;
    case 3: menu = 'Ouverture des notification';break;
    case 4: menu = 'deconnecter';break;
    default: menu = 'Choix invalide';break;
}
console.log(menu)