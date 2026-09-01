const prompt = require('prompt-sync')()
let note = prompt("taper votre note: ")
if(note >20 || note < 0){
    console.log("taper notre note")
}else{
    if(note >=10){
        console.log("admis")
    }else{
        console.log("non admis");
        
    }
}