let playerChoice;

var paper = document.getElementById("first-pick");
var rock = document.getElementById("second-pick");
var scissor = document.getElementById("third-pick");

let result;

function  myFunction()
{
    let getComputerChoice = Math.floor(Math.random() * 3 + 1);

if(getComputerChoice == 1){
    document.getElementById("co-op-choice-image").src = "../Rick Paper Scissor/imgs/paper.png"
    finalChoice = 1;
}else if(getComputerChoice == 2){
  document.getElementById("co-op-choice-image").src = "../Rick Paper Scissor/imgs/rock.png"
  finalChoice = 2;
}else if(getComputerChoice == 3){
 document.getElementById("co-op-choice-image").src = "../Rick Paper Scissor/imgs/scissor.png"
 finalChoice = 3;
} 
}

function paperPick(){
  if(finalChoice == 1){
    alert("It's a Draw!!!")
  }else if(finalChoice == 2){
    alert("You WIN !!!")
  }else {
    alert("You Lose!!!")
  }
}

