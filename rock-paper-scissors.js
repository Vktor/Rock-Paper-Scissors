function computerPlay(){
 let hand = Math.random();
 console.log(hand);
 if(hand <= 0.3333){
     console.log("paper");
     return "Paper";
 }else if(hand >0.3333 && hand <= 0.6666){
    console.log("Scissors");
    return "Scissors"
 }else{
     console.log("rock");
     return "rock"
 }
}

function playRound(playerSeleccion, computerSelection){

}

function game (){

}

console.log("esta wea es un: "+computerPlay());