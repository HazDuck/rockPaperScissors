//LINKING HTML VALUES AND BUTTONS

const rock_ = document.getElementById("rock_pete");
const paper_ = document.getElementById("paper_pete");
const scissors_ = document.getElementById("scissors_pete");
let humanScore_span = document.getElementById("humanScore");
let compScore_span = document.getElementById("compScore");
let result_id = document.querySelector("#result");
let choiceHuman_span = document.querySelector("choiceHuman");
let computerChoice_span = document.getElementById("computerChoice");
let humanChoice_span = document.getElementById("humanChoice");

let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  /* SUGGESTED CODE FROM TUTORIAL IS BUT I WANTED TO USE THE CODE I WROTE ON CODE
  ACADEMY
  const choices = ["r", "p", "s"];*/

  //PROVIDING A RANDOM 0-2 NUMBER AND ASSIGNING IT TO ROCK, PAPER OR SCISSORS

  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
/*console.log(getComputerChoice()); THIS WAS MY TEST OF THE FUNCTION*/

//GIVES INSTRUCTIONS ON WHAT TO DO WITH RESULTING VALUE OF PAPER VS SCISSORS ETC

function tie() {
  result_id.innerHTML = "It is a tie. Try again.";
}
function compwin() {
  compScore++;
  result_id.innerHTML = "Robots win!";
  compScore_span.innerHTML = compScore;
}
function humanwin() {
  humanScore++;
  result_id.innerHTML = "Humans win!";
  humanScore_span.innerHTML = humanScore;
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  computerChoice_span.innerHTML = "Robots chose: " + computerChoice;
  //humanChoice_span.innerHTML = "You chose: " + humanChoice;
  humanChoice_span.innerHTML = "You chose: " + userChoice;
  /*console.log(userChoice + " is a great choice"); THIS WAS MY TEST TO MAKE
  SURE THE BUTTONS WERE HOOKED UP AS EXPECTED*/

  if (userChoice === computerChoice) {
    //console.log("It is a tie.");THIS IS FROM TESTING COMPARISON CODE
    return tie(); //ADDING RETURN PREVENTED A TIE LOGGING TIE AND HUMAN WINS
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      //console.log("Computer Wins!"); THIS IS FROM TESTING COMPARISON CODE
      compwin();
    } else {
      humanwin();
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      //console.log("Computer Wins!"); THIS IS FROM TESTING COMPARISON CODE
      compwin();
    } else {
      humanwin();
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      //console.log("Computer Wins!") THIS IS FROM TESTING COMPARISON CODE
      compwin();
    } else {
      humanwin();
    }
  }
}


function humanChoice() {
  //BUTTONS
  rock_.addEventListener("click", function() {
    playGame("rock");
  });

  paper_.addEventListener("click", function() {
    playGame("paper");
  });

  scissors_.addEventListener("click", function() {
    playGame("scissors");
  });
}

humanChoice();
