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

  //DOM method - send result of round to results div


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
      results.textContent = victoryMsg;
    } else if (humanSelection === computerSelection) { 
      results.textContent = "Round " + roundsPlayed + "'s " + "a draw.";
    } else { 
      computerScore++
      results.textContent = defeatMsg;
    }}


// buttons that give corresponding input
let rock = document.querySelector('#rock')
rock.addEventListener('click', function() {
        playRound("rock");
})

let paper = document.querySelector('#paper')
paper.addEventListener('click', function() {
        playRound("paper");
})

let scissors = document.querySelector('#scissors')
scissors.addEventListener('click', function() {
        playRound("scissors");
})





    

  // create a function that plays 5 rounds (using a new computerSelection each time), records the outcome of each game and then decides an overall winner based on the final score
  /*function game() {

  roundsPlayed = 0; // ensure round counter is reset when game is started

    while (roundsPlayed <= 4) { // when less than or equal to 4 rounds have played, ask player for their input, and use computerSelection variablel to generate an answer for the computer, then play a round

        let humanSelection = prompt("Rock, paper or scissors?").toLowerCase(); // prompt asking for player input. String is converted to lowercase

        if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") { // detect whether a valid answer was given and continue with code if true

        let computerSelection = computerPlay(); // create a variable called computerSelection that stores the result of computerPlay function being called
        console.log(playRound(humanSelection, computerSelection)); // console log the results of a single round

        } else { // if anything other than rock, paper or scissors is entered, ask player to provide valid response
            alert("Please enter a valid response");
        }
    }
    if (roundsPlayed === 5 && humanScore > computerScore) { // at the end of the 5 rounds, if player's score is greater than the computer's, congratulate player
        console.log("Congratulations, you win the game");
    
    } else if (roundsPlayed === 5 && humanScore === computerScore) { // at the end of the 5 rounds if computer and player scores are equal, announce a draw
        console.log("You're evenly matched - it's a draw!");
        
    } else {
        console.log("You lost the game"); // if neither of the above criteria are met, then announce player has lost as cmputer score must be greater
        
    }}*/

    