const kickOutcome = document.querySelector("#kick-outcome");
const controlButtons = document.querySelectorAll(".control-button");
const userState = document.querySelector("#userState");
const userScore = document.getElementById('user-score');
const cpuScore = document.getElementById('cpu-score');
let userDirection;
let cpuDirection;
let userGoals = 0;
let cpuGoals = 0;


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

    if (userDirection === cpuDirection){
        cpuGoals++;
        outcome = `User kicked ${userDirection} and CPU dived ${cpuDirection}. SAVED!`;
        cpuScore.innerHTML = cpuGoals;
    } else {
        userGoals++;
        outcome = `User kicked ${userDirection} and CPU dived ${cpuDirection}. GOAL!`;
        userScore.innerHTML = userGoals;
    }
    return outcome;

}

/**
 * Check if either player or CPU have reached 5 goals
 */
function checkWinner() {
    if (userGoals === 5 && cpuGoals < 5){
        userState.innerHTML = "YOU WIN!"
    }
    if (userGoals < 5 && cpuGoals === 5){
        userState.innerHTML = "COMPUTER WINS!"
    }
}

