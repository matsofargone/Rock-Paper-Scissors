// create function that randomly selects a string r, p , s 

function getComputerchoice() {
//array of computer options
chocies = ['Rock', 'Paper', 'Scissors']
//variable that selects a random index 0 to 2
cpuPick = Math.floor(Math.random() * chocies.length)

//returns pick 
return chocies[cpuPick].toLowerCase()
}


const playerSelection = '';
const computerChoice = getComputerchoice();
let cpuScore = 0;
let playerScore = 0;


function playRound(playerSelection,computerMove) {

  var playerChioce =  playerSelection.toLowerCase();
 

    //create function to play one round of r,p,s
    if (playerChioce == computerMove){
       
        return "Tie Game!";
    } else if (playerChioce == 'scissors' && computerMove == 'paper') {
        playerScore ++;
        return `Player 1 wins! \n Player Score ${playerScore} Computer Score ${cpuScore} `;
    } else if (playerChioce == 'paper' && computerMove == 'rock') {
        playerScore ++;
        return `Player 1 wins! \n Player Score ${playerScore} Computer Score ${cpuScore} `;

    } else if (playerChioce == 'rock' && computerMove == 'scissors'){
        playerScore ++;
        return `Player 1 wins! \n Player Score ${playerScore} Computer Score ${cpuScore} `;
        
    } else {
        cpuScore++;
        return `CPU wins! \n Player Score ${playerScore} Computer Score ${cpuScore} `;
    }

}

// game function to handle and track score 

function game() {
    //code 
    

    while (cpuScore < 5 && playerScore < 5) {
        var playerSelection =  prompt('Please enter Rock, Paper, Scissors');
         
        if (playerSelection == '') {
            playerSelection = prompt('Valid entries: rock, paper, scissors')
        } else {
            console.log(playRound(playerSelection, computerChoice));
            
        }

        
    }

    if (cpuScore > playerScore) {
        return "Better Luck next time, CPU Wins"
    } else {
        return "Player gets the victory"
    }


}