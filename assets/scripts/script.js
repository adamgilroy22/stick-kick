let cpuDirection;

// Generate random number to determine what way the CPU shoots/dives
function generateCpuDirection() {
    let cpuChoice = Math.floor(Math.random() * 3 + 1);

    if (cpuChoice === 1) {
        cpuDirection = 'Left';
    } else if (cpuChoice === 2) {
        cpuDirection = 'Middle';
    } else if (cpuChoice === 3) {
        cpuDirection = 'Right';
    }
}

