function nettoyerEspaces(texte){
    console.log(texte)
    let nv =  texte.split('').filter((e)=>e.trim().length).join('')
    // let nv =  texte.trim()
    return nv
}

function mettreEnMajuscule(texte){
    console.log(texte)
    return texte.toUpperCase()
}

function ajouterPrefixe(texte, prefixe = "LOG: "){
    console.log(texte)
    return `${prefixe}${texte}`
}

function traiterMessage(texte, ...transformations){
    for(let i = 0 ; i < transformations.length; i++){
        texte = transformations[i](texte)
    }
    return texte
}

console.log(traiterMessage("Ahmed eladraoui",nettoyerEspaces, mettreEnMajuscule, ajouterPrefixe))

// console.log(nettoyerEspaces("A H M ED"))
// console.log(ajouterPrefixe("Ahmed"))
// console.log(mettreEnMajuscule("ahmed"))