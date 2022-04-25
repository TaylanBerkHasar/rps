// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
console.log(buttons);
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', playerPlay);
});


const selections = document.getElementById("selections")
const results = document.getElementById("results")
const playerimage = document.getElementById("player-image")
const computerimage = document.getElementById("computer-image")
const playertext = document.getElementById("player-text")
const computertext = document.getElementById("computer-text")



function computerPlay(input){
    let plays = ["ROCK", "PAPER","SCISSORS"]

    let int = Math.floor(Math.random() * (3 - 0) + 0);

    return plays[int]
}

function playerPlay(e){
    choice = this.id;
    let computerChoice = computerPlay();
    let resultString ="";
    selections.textContent = choice + " VS. " +computerChoice;
    playertext.textContent = choice;
    computertext.textContent = computerChoice;
    playerimage.src="assets/" + choice.toLowerCase() + ".png";
    computerimage.src="assets/" + computerChoice.toLowerCase()  + ".png";
    if (choice === computerChoice){
        resultString ="Draw";
    }
    

    else if(choice === "ROCK" && computerChoice === "PAPER"){
        resultString ="Computer Wins";

    }

    else if(choice === "ROCK" && computerChoice === "SCISSORS"){
        resultString ="Player Wins";

    }

    else if(choice === "PAPER" && computerChoice === "ROCK"){
        resultString ="Player Wins";

    }

    else if(choice === "PAPER" && computerChoice === "SCISSORS"){
        resultString ="Computer Wins";

    }

    else if(choice === "SCISSORS" && computerChoice === "PAPER"){
        resultString ="Player Wins";

    }

    else if(choice === "SCISSORS" && computerChoice === "ROCK"){
        resultString ="Computer Wins";

    }

    results.textContent = resultString;
}