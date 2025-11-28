const numberOfDice = 3;
const diceContainer = document.querySelector('.dice-container');
const btnRollDice = document.querySelector('.btn-roll-dice');
const totalDisplay = document.querySelector('.dice-number');
const successAlert = document.getElementById('success-alert');
const rollAgainAlert = document.getElementById('roll-again-alert');


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
        dot.classList.add('dice-dot');
        dot.style.setProperty('--left', dotPosition[0] + '%');
        dot.style.setProperty('--top', dotPosition[1] + '%');
        dice.appendChild(dot);

    }

    return dice;

}

function randomiseDice(diceContainer, numberOfDice) {
    const rolls = [];
    diceContainer.innerHTML = '';
    for (let i = 0; i < numberOfDice; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const dice = createDice(randomNumber);
        diceContainer.appendChild(dice);
        rolls.push(randomNumber);
    }
    return rolls;
}

function countDiceNumber(rolls) {
    let total = 0;
    for (let i = 0; i < rolls.length; i++) {
        total += rolls[i];
    } 
    if (total >= 10) {
        successAlert.style.display = 'block';
        rollAgainAlert.style.display = 'none';
    } else {
        rollAgainAlert.style.display = 'block';
        successAlert.style.display = 'none';
    }
    totalDisplay.textContent = `${total}`;
}

const initialRolls = randomiseDice(diceContainer, numberOfDice);
countDiceNumber(initialRolls);

btnRollDice.addEventListener('click', () => {

    successAlert.style.display = 'none';
    totalDisplay.textContent = '';


    const interval = setInterval(() => {
        randomiseDice(diceContainer, numberOfDice);
    }, 50);

    setTimeout(() => {
        clearInterval(interval);


        const finalRolls = randomiseDice(diceContainer, numberOfDice);
        countDiceNumber(finalRolls);


    }, 1000);
});




