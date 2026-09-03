function creerCompteur(valeurInitiale = 0){
    return (
        function incremontation(){
            valeurInitiale++
            return valeurInitiale
}    )
}

const cmpt =  creerCompteur(10)

console.log(cmpt())
console.log(cmpt())