const formatMad = (val) => `${val} DH`

function convertirMontant(montant, taux, frmt){
    return frmt(montant * taux)
}

console.log(convertirMontant(100, 10.5, formatMad))