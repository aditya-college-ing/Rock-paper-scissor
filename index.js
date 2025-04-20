 let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg"); 
let userscorepara = document.querySelector("#your-score");
let computerscorepara = document.querySelector("#computer-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
const showwinner = (userwin, userchoice, computer) =>{
if(userwin){
    userScore++;
    userscorepara.innerText = userScore;
    msg.innerText = `You win your ${userchoice} beats ${computer}`;
    msg.style.backgroundColor = "lime";
}else{
    computerScore++
    computerscorepara.innerText = computerScore;
  msg.innerText = `You Lose ${computer} beats your ${userchoice}`;
  msg.style.backgroundColor = "red";
 };
};
const playgame = (userchoice) =>{
    console.log("user choice =",userchoice)
    const computer = computerchoice()
    console.log("computer choice =",computer)
    if(userchoice === computer){
        DrawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = computer ==="paper"? false:true;
        }else if(userchoice === "paper"){
          userwin = computer === "scissor"? false:true;
        }else{
           userwin = computer === "rock"? false:true;
        }
        showwinner(userwin , userchoice, computer)
    }
}
const computerchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx]
}
const DrawGame = () => {
    console.log("Match Was Draw");
    msg.innerText = "Match Draw";
    msg.style.backgroundColor = "yellow"
 }