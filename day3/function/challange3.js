function genererEmail(nom, prenom){
    return `${nom}.${prenom}@entreprise.com`.toLowerCase()
}

console.log(genererEmail("Ahmed","Eladraoui"))