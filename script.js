let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#userscore")
let cScore = document.querySelector("#compscore")
  

let userScore = 0;
let compScore = 0;

function showWinner (userWin,userChoice,compChoice) {
    if (userWin) {
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function genCompChoice() {
    let options = ["rock", "paper", "scissor"]
    randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

function playGame(userChoice) {
    console.log(userChoice);
    let compChoice = genCompChoice()
    console.log(compChoice);
    if (userChoice == compChoice) {
      msg.innerText = `Game was drawn!`
      msg.style.backgroundColor = "black";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {                                                 
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })

})






