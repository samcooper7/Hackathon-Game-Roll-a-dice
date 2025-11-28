const numberOfDice = 3;
const diceContainer = document.querySelector('.dice-container');
const btnRollDice = document.querySelector('.btn-roll-dice');


function createDice(number) {
    const dotPositionMatrix = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80] 
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]


    };  
    
    const dice = document.createElement('div');
    dice.classList.add('dice');

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.setProperty('--left', dotPosition[0] + '%');
        dot.style.setProperty('--top', dotPosition[1] + '%');
        dice.appendChild(dot);

    }

    return dice;

}

function randomiseDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = '';
    for (let i = 0; i < numberOfDice; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const dice = createDice(randomNumber);
        diceContainer.appendChild(dice);
    }
}


randomiseDice(diceContainer, numberOfDice);

btnRollDice.addEventListener('click', () => {
    const interval = setInterval(() => {
        randomiseDice(diceContainer, numberOfDice);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
    }, 1000);
});




