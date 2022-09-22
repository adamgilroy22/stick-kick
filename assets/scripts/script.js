const kickOutcome = document.querySelector("#kick-outcome");
const controlButtons = document.querySelectorAll(".control-button");
let userDirection;
let cpuDirection;
let outcome;

/**
 * Take the user's direction choice and assign the value to player
 * and call the computer choice function
 */
controlButtons.forEach(button => button.addEventListener("click", () => {

    userDirection = button.textContent;
    generateCpuChoice();

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

