function verifierMotDePasse(motDePasse){
    for(let i =0 ; i<motDePasse.length; i++){
        if(motDePasse.length >= 8 && motDePasse.includes("@")){
            return true;
        }else{
            return false;
        }
    }
}

console.log(verifierMotDePasse("749948993"))