const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const winningCombos = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"]
];

let player1 = "Player1";
let player2 = "computer";
let symbol = "X";
let gameStarted = false;

let currentPlayer = player1;

const documentSlots = document.querySelectorAll(".slot");
const opponentBtn = document.querySelector("#opponentBtn");
const opponentText = document.querySelector(".opponentText");

opponentBtn.onclick = changeOpponent;

window.addEventListener("DOMContentLoaded", activateSlotsEventListeners);

function selectSlot(player, currentPlayerArr, slotIndex, slot) {
    gameRunning = true;
    
    if(gameRunning === true){
        opponentBtn.disabled = true;
    }

    if (slots.includes(slotIndex)) {
        player === player1 ? symbol = "X" : symbol = "O";

        let removableIndex = slots.indexOf(slotIndex);
        slots.splice(removableIndex, 1);
        console.log(`${currentPlayer} chose ${slotIndex}`);
        slot.innerHTML = `<h1>${symbol}</h1>`;

        currentPlayerArr.push(slotIndex);

        if (hasWinningCombo(currentPlayerArr)) {
            let winInterval = setInterval(() => {
                window.alert(`${currentPlayer} wins!`);
                clearInterval(winInterval);
                window.location.reload();
            }, 50);

            return;
        } else if (slots.length < 1) {
            let winInterval = setInterval(() => {
                window.alert(`Draw!`);
                clearInterval(winInterval);
                window.location.reload();
            }, 50);
        }

        currentPlayer = player === player1 ? player2 : player1;

        if (player2 === "computer" && player === player1) {
            currentPlayer = player2;
            let choice = slots[Math.floor(Math.random() * slots.length)];

            console.log(`choice ${choice}`);

            currentPlayerArr = player2Slots;
            documentSlots.forEach(slot => {
                slot.onclick = () => {
                    window.alert("please wait!");
                }

            })

            setTimeout(() => {
                // code to run after 0.5 seconds
                selectSlot(currentPlayer, currentPlayerArr, choice, documentSlots[Number(choice) - 1]);
                activateSlotsEventListeners();
            }, 500);

        }

    } else {
        console.log(`${slotIndex} is marked`)
    }

}

function activateSlotsEventListeners() {
    documentSlots.forEach(slot => {
        slot.onclick = () => {
            let slotIndex = slot.getAttribute("index");
            console.log(`clicked Value Element -> ${slotIndex}`)

            let currentPlayerArr = currentPlayer === player1 ? player1Slots : player2Slots

            selectSlot(currentPlayer, currentPlayerArr, slotIndex, slot);
        }

    })
}


function changeOpponent(){
    player2 === "computer"? player2 = "player2": player2 = "computer"
    opponentBtn.innerHTML = player2 === "computer"? "Play VS Person":"Play VS Bot";
    opponentText.innerHTML = player2 === "computer"? "Current Opponent: BOT":`Current Opponent: ${player2}`;
}


function hasWinningCombo(playerSlots) {
    return winningCombos.some(combo =>
        combo.every(slot => playerSlots.includes(slot))
    );
}

