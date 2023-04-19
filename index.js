// create function that randomly selects a string r, p , s 

function getComputerchoice() {
//array of computer options
chocies = ['Rock', 'Paper', 'Scissors']
//variable that selects a random index 0 to 2
cpuPick = Math.floor(Math.random() * chocies.length)

//returns pick 
return chocies[cpuPick].toLowerCase()
}


const playerSelection = 'paper'.toLowerCase();
const computerChoice = getComputerchoice();

function playRound() {
    //create function to play one round of r,p,s
}