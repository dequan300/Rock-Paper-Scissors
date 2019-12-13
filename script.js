function rpsGame(yourChoice){
console.log(yourChoice);
let rock= document.querySelector("#rock")
let scissors = document.querySelector("#scissors")
let paper= document.querySelector("#paper")
let botOpt= [rock,scissors,paper]
let random=Math.floor(Math.random()*3)
let computerChoice =botOpt[random]
let div = document.createElement("DIV")
let box= document.querySelector(".box")

if(yourChoice===paper && computerChoice === rock){
    // console.log("you win!")
    div.innerHTML="you win"
    document.body.appendChild(div)
    div.appendChild(box)
}else if(yourChoice===rock &&computerChoice===paper){
console.log("you lose!")
}else if(yourChoice===rock && computerChoice==scissors){
    console.log("you win!")
}else if(yourChoice===scissors && computerChoice===paper){
    console.log("you win!")
} else if(yourChoice===paper && computerChoice===scissors){
    console.log("you lose!")

}else if(yourChoice===computerChoice){
    console.log(" TIE")
}


};






  




