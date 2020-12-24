 // create a function called computerPlay that returns a random choice of 'rock' 'paper' or 'scissors'
 function computerPlay() {
  let selection = Math.floor(Math.random() * 3);
  if (selection === 0) {
    return "rock";
  } else if (selection === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;


function resetScores() {
humanScore = 0;
computerScore = 0;
}


// The game itself - this plays one round and takes input from a human player and the computerPlay() function given provided bythe game function
function playRound(humanSelection, computerSelection) {

// increase round counter by 1 when a round is played
roundsPlayed++;

computerSelection = computerPlay(); // stores the result of computerPlay function being called


// define victory and defeat messages shown at the end of the round
  const victoryMsg = "You win round " + roundsPlayed + " - " + humanSelection + " beats " + computerSelection + ".";
  const defeatMsg = "You lose round " + roundsPlayed + " - " + computerSelection + " beats " + humanSelection + ".";

// define victory conditions for human player and return victory message if true, define draw conditions and return draw message, and define loss conditions and return loss message
  if (humanSelection === "rock" && computerSelection === "scissors"|| humanSelection === "paper" && computerSelection === "rock" || humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    roundResult.textContent = victoryMsg;
  } else if (humanSelection === computerSelection) { 
    roundResult.textContent = "Round " + roundsPlayed + "'s " + "a draw.";
  } else { 
    computerScore++
    roundResult.textContent = defeatMsg;
  }
  humanScoreDisp.textContent = humanScore;
  compScoreDisp.textContent = computerScore;
  checkGame();
}

// checks overall score, displays, and announces overall winner after 5 rounds
function checkGame() {

if (roundsPlayed === 5 && humanScore > computerScore) {
    
  gameResult.textContent = "Congratulations, you win the game";
  roundsPlayed = 0;
  resetScores();

        
} else if (roundsPlayed === 5 && humanScore === computerScore) { 
    
  gameResult.textContent = "You're evenly matched - it's a draw!";
  roundsPlayed = 0;
  resetScores();


} else if (roundsPlayed === 5 && humanScore < computerScore) {

  gameResult.textContent = "You lost the game";
  roundsPlayed = 0
  resetScores();
        
} else {

  return;
                 
}} 

// buttons that give corresponding input
let rock = document.querySelector('#rock')
rock.addEventListener('mouseover', function() {
playRound("rock");
})


let paper = document.querySelector('#paper')
paper.addEventListener('mouseover', function() {
playRound("paper");
})


let scissors = document.querySelector('#scissors')
scissors.addEventListener('mouseover', function() {
playRound("scissors");
})

