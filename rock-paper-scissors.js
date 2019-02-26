function you(){
    let userSelect = prompt("Rock, Paper or Scissors?");
    userSelect.toLowerCase();
    return userSelect;
}


function computerPlay(){
 let hand = Math.random();
 if(hand <= 0.3333){
     return "paper";
 }else if(hand >0.3333 && hand <= 0.6666){
    return "scissors"
 }else{
     return "rock"
 }
}

function playRound(playerSeleccion, computerSelection){
    
    if(Object.is(playerSeleccion, computerSelection)){
        console.log("Holy shit it's a Draw")
    }else if(playerSeleccion=="paper" && computerSelection=="scissors"){
        console.log("you lose! Scissors beats paper")
        return "c";
    }else if(playerSeleccion=="scissors" && computerSelection=="rock"){
        console.log("you lose! rock beats scissors")
        return "c";
    }else if(playerSeleccion=="rock" && computerSelection=="paper"){
        console.log("you lose! paper beats rock")
        return "c";
    }
    else if(playerSeleccion=="paper" && computerSelection=="rock"){
        console.log("you win! paper beats rock")
        return "u";
    }else if(playerSeleccion=="scissors" && computerSelection=="paper"){
        console.log("you win! scissors beats paper")
        return "u";
    }else if(playerSeleccion=="rock" && computerSelection=="scissors"){
        console.log("you win! rock beats scissors")
        return "u";
    }else{
        console.log("do you wrote it right?... try again")
    }

    }

function game (){
    let user = 0;
    let comp = 0;
    for(let i=0; i<5; i++){
        let value = playRound(you(),computerPlay());
        if(value=="c"){
            comp++;
        }else if(value =="u"){
            user++;
        }
        console.log(`Score: You = ${user} Computer = ${comp}`)
    }
    if(user>comp){
        console.log("well done, You Win!")
    }else{
        console.log("I won, sucker!");
    }
}

game();