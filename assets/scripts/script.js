const kickOutcome = document.querySelector("#kick-outcome");
const controlButtons = document.querySelectorAll(".control-button");
const gameState = document.querySelector("#gameState");
const userScore = document.getElementById('user-score');
const cpuScore = document.getElementById('cpu-score');
let userKicker = 0;
let cpuKicker = 1;
let userDirection;
let cpuDirection;
let userGoals = 0;
let cpuGoals = 0;
var kicker = userKicker;


/**
 * Take the user's direction choice and assign the value to player
 * and call the computer choice function
 */
controlButtons.forEach(button => button.addEventListener("click", () => {

    userDirection = button.textContent;
    generateCpuDirection();
    kickOutcome.textContent = checkOutcome();
    checkWinner();

}));

/**
 * Generate random number to determine what way the CPU shoots/dives
 */
function generateCpuDirection() {
    const cpuChoice = Math.floor(Math.random() * 3 + 1);

    switch(cpuChoice){
        case 1:
            cpuDirection = 'Left';
            break;
        case 2:
            cpuDirection = 'Middle';
            break;
        case 3:
            cpuDirection = 'Right';
            break;
    }
}

/**
 * Check both user and cpu choices and determine if it's a goal or a save
 * and add to scoreboard
 */
function checkOutcome() {
    let outcome = "";

    if (kicker === userKicker) {
        if (userDirection === cpuDirection){
            outcome = `User kicked ${userDirection} and CPU dived ${cpuDirection}. SAVED!`;
        } else {
            userGoals++;
            outcome = `User kicked ${userDirection} and CPU dived ${cpuDirection}. GOAL!`;
            userScore.innerHTML = userGoals;
        }
    } else if (kicker === cpuKicker) {
        if (cpuDirection === userDirection){
            outcome = `CPU kicked ${cpuDirection} and User dived ${userDirection}. SAVED!`;
        } else {
            cpuGoals++;
            outcome = `CPU kicked ${cpuDirection} and User dived ${userDirection}. GOAL!`;
            cpuScore.innerHTML = cpuGoals;
        }
    }  
    changeKicker();
    return outcome;

}

/**
 * Change kicker after each turn
 */
function changeKicker() {
    if (kicker === userKicker){
        kicker = cpuKicker;
        gameState.innerHTML = "It's your turn to save"
    }else if (kicker === cpuKicker){
        kicker = userKicker;
        gameState.innerHTML = "It's your turn to kick"
    }
}

/**
 * Check if either player or CPU have reached 5 goals
 */
function checkWinner() {
    if (userGoals === 5 && cpuGoals < 5){
        gameState.innerHTML = "YOU WIN!"
        endGame();
    }
    if (userGoals < 5 && cpuGoals === 5){
        gameState.innerHTML = "COMPUTER WINS!"
        endGame();
    }
}

/**
 * Disable direction buttons if either user or cpu reach 5 goals
 */
function endGame() {

       document.getElementById("left").disabled = true;
       document.getElementById("middle").disabled = true;
       document.getElementById("right").disabled = true;
    
}

