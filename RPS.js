let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const reset = document.querySelector(".reset");


// console.dir(userScore);

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    
}
const drawGame = () =>{
    // console.log("draw");
    msg.innerText = "You Draw!.. Play again"
    msg.style.background="yellow"
};

const showWinner = (userWin , userchoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win!..yours ${userchoice} beats computers ${compChoice}`
        msg.style.background="green"
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You Loss!..computers ${compChoice} beats yours ${userchoice}`
        msg.style.background="red"
    }
}


const playGame = (userchoice) =>{
    // console.log("user choice = ",userchoice);
    const compChoice = genCompChoice();
    // console.log("computer choice = ",compChoice); 
    
    if(userchoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userchoice === "rock") {
            userWin = compChoice ==="paper" ? false : true;
        } else if(userchoice === "paper") {
            userWin = compChoice ==="scissor"? false :true;
        } else if(userchoice === "scissor") {
            userWin = compChoice === "rock" ? false :true
        }
        showWinner(userWin,userchoice,compChoice);
    }

}

choices.forEach((choice) =>{
    // console.log(choice)
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
        
    });
});
