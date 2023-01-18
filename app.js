let playerChoice;

function  myFunction()
{
    let getComputerChoice = Math.floor(Math.random() * 3 + 1);

if(getComputerChoice == 1){
    document.getElementById("co-op-choice-image").src = "../Rick Paper Scissor/imgs/paper.png"
}else if(getComputerChoice == 2){
  document.getElementById("co-op-choice-image").src = "../Rick Paper Scissor/imgs/rock.png"
}else if(getComputerChoice == 3){
 document.getElementById("co-op-choice-image").src = "../Rick Paper Scissor/imgs/scissor.png"
} 
}
