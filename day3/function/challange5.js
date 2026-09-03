function jj(...args){
    let somme = 0;
    for(let i = 0; i < args.length; i++){
        somme+=args[i]
    }
    console.log(somme)
}

jj(1,2,10)