/* jshint esversion: 11 */
const controlButtons = document.querySelectorAll(".control-button");
const gameState = document.querySelector("#gameState");
const userScore = document.getElementById('user-score');
const cpuScore = document.getElementById('cpu-score');
const musicButton = document.getElementById('music-button');
const audio = document.querySelector("audio");
let userKicker = 0;
let cpuKicker = 1;
let userDirection;
let cpuDirection;
let userGoals = 0;
let cpuGoals = 0;
let kicker = userKicker;
let gameImg = document.getElementById("game-image");
let modalButton = document.getElementById("modal-button");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");
let resetButton = document.getElementById("reset-button");

/**
 * Music control settings
 */
musicButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
        musicButton.innerHTML = "Stop Music";
    } else {
        audio.pause();
        musicButton.innerHTML = "Play Music";
    }
});

/**
 * Modal box settings
 */
modalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

/**
 * Reset button
 */
resetButton.addEventListener("click", () => {
    location.reload();
});


/**
 * Take the user's direction choice and assign the value to player
 * and call the computer choice function
 */
controlButtons.forEach(button => button.addEventListener("click", () => {
    userDirection = button.textContent;
    generateCpuDirection();
    gameState.textContent = checkOutcome();
    checkWinner();
}));

/**
 * Generate random number to determine what way the CPU shoots/dives
 */
function generateCpuDirection() {
    const cpuChoice = Math.floor(Math.random() * 3 + 1);

    switch (cpuChoice) {
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
        if (userDirection === cpuDirection) {
            gameImg.src = userPlayImg;
            outcome = `You kicked ${userDirection} and CPU dived ${cpuDirection}. SAVED!`;
        } else {
            userGoals++;
            gameImg.src = userPlayImg;
            outcome = `You kicked ${userDirection} and CPU dived ${cpuDirection}. GOAL!`;
            userScore.innerHTML = userGoals;
        }
    } else if (kicker === cpuKicker) {
        if (cpuDirection === userDirection) {
            gameImg.src = cpuPlayImg;
            outcome = `CPU kicked ${cpuDirection} and You dived ${userDirection}. SAVED!`;
        } else {
            cpuGoals++;
            gameImg.src = cpuPlayImg;
            outcome = `CPU kicked ${cpuDirection} and You dived ${userDirection}. GOAL!`;
            cpuScore.innerHTML = cpuGoals;
        }
    }
    document.getElementById("left").disabled = true;
    document.getElementById("middle").disabled = true;
    document.getElementById("right").disabled = true;
    return outcome;
}

/**
 * Change kicker after each turn
 */
function changeKicker() {
    if (kicker === userKicker) {
        kicker = cpuKicker;
        document.getElementById("left").disabled = false;
        document.getElementById("middle").disabled = false;
        document.getElementById("right").disabled = false;
        gameState.innerHTML = "It's your turn to save";
        gameImg.src = "assets/images/cpu-ready.png";
    } else if (kicker === cpuKicker) {
        kicker = userKicker;
        document.getElementById("left").disabled = false;
        document.getElementById("middle").disabled = false;
        document.getElementById("right").disabled = false;
        gameState.innerHTML = "It's your turn to kick";
        gameImg.src = "assets/images/user-ready.png";
    }
}

/**
 * Check if either player or CPU have reached 5 goals
 */
function checkWinner() {
    if (userGoals === 5 && cpuGoals < 5) {
        gameState.innerHTML = "YOU WIN!";
        endGame();
    } else if (userGoals < 5 && cpuGoals === 5) {
        gameState.innerHTML = "COMPUTER WINS!";
        endGame();
    } else {
        setTimeout(changeKicker, 2500);
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