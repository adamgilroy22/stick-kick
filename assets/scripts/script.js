let cpuDirection;



// Generate random number to determine what way the CPU shoots/dives
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

