const prompt = require("prompt-sync")()

let debut = +prompt("Taper le debut: ")
let fin = +prompt("Taper le fin: ")
let count = 0
let bool = true

console.log("Nombre premiers: ")
for(let i = debut; i <= fin;i++){
    bool = true
    for(let j = 2; j <= i/2; j++){
        if(i % j == 0){
            bool = false
            break
        }
    }
    if(bool){
        console.log(i)
    }
}


// const prompt = require("prompt-sync")()

// let debut = +prompt("Taper le debut: ")
// let fin = +prompt("Taper le fin: ")
// let count = 0


// console.log("Nombre premiers: ")

// const fnc = (n)=>{
//     let bool = true
//     for(let i = 2; i< n/2; i++){
//         if(n % i == 0){
//             bool = false
//             break
//         }
//     }
//     return bool
// }

// for(let i = debut; i <= fin ; i++){
//     if(fnc(i)){
//         console.log(i)
//         count++
//     }
// }