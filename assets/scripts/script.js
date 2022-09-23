/* jshint esversion: 11 */
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
let kicker = userKicker;
let gameImg = document.getElementById("game-image");


/**
 * Take the user's direction choice and assign the value to player
 * and call the computer choice function
 */
controlButtons.forEach(button => button.addEventListener("click", () => {

    userDirection = button.textContent;
    generateCpuDirection();
    kickOutcome.textContent = checkOutcome();
    setTimeout(changeKicker, 1000);
    checkWinner();

}));

/**
 * Generate random number to determine what way the CPU shoots/dives
 */
function generateCpuDirection() {
    const cpuChoice = Math.floor(Math.random() * 3 + 1);

    switch(cpuChoice){
        case 1:
            cpuDirection = 'left';
            break;
        case 2:
            cpuDirection = 'middle';
            break;
        case 3:
            cpuDirection = 'right';
            break;
    }
}

/**
 * Check both user and cpu choices and determine if it's a goal or a save
 * change main image to reflect outcome and add result to scoreboard
 */
function checkOutcome() {
    
    let outcome = "";
    
    const userPlayImg = `assets/images/user-${userDirection}-cpu-${cpuDirection}.png`;
    const cpuPlayImg = `assets/images/cpu-${cpuDirection}-user-${userDirection}.png`;

    if (kicker === userKicker) {
        if (userDirection === cpuDirection){
            gameImg.src = userPlayImg;
            outcome = `You kicked ${userDirection} and CPU dived ${cpuDirection}. SAVED!`;
        } else {
            userGoals++;
            gameImg.src = userPlayImg;
            outcome = `You kicked ${userDirection} and CPU dived ${cpuDirection}. GOAL!`;
            userScore.innerHTML = userGoals;
        }
    } else if (kicker === cpuKicker) {
        if (cpuDirection === userDirection){
            gameImg.src = cpuPlayImg;
            outcome = `CPU kicked ${cpuDirection} and You dived ${userDirection}. SAVED!`;
        } else {
            cpuGoals++;
            gameImg.src = cpuPlayImg;
            outcome = `CPU kicked ${cpuDirection} and You dived ${userDirection}. GOAL!`;
            cpuScore.innerHTML = cpuGoals;
        }
    } 
    
    return outcome;

}

/**
 * Change kicker after each turn
 */
function changeKicker() {
    if (kicker === userKicker){
        kicker = cpuKicker;
        gameState.innerHTML = "It's your turn to save"
        gameImg.src="assets/images/cpu-ready.png";
    }else if (kicker === cpuKicker){
        kicker = userKicker;
        gameState.innerHTML = "It's your turn to kick"
        gameImg.src="assets/images/user-ready.png";
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

