const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const player1 = "Player1";
const player2 = "computer";
let symbol = "X";

let currentPlayer = player1;

const documentSlots = document.querySelectorAll(".slot");

window.addEventListener("DOMContentLoaded", activateSlotsEventListeners);

function selectSlot(player, currentArr, slotValue, slot) {
    if (slots.includes(slotValue)) {
        player === player1 ? symbol = "X" : symbol = "O";

        let removableIndex = slots.indexOf(slotValue);
        slots.splice(removableIndex, 1);
        console.log(`${currentPlayer} chose ${slotValue}`);
        slot.innerHTML = `<h1>${symbol}</h1>`;

        currentArr.push(slotValue);

        if (currentArr.includes("1") && currentArr.includes("2") && currentArr.includes("3") ||
            currentArr.includes("4") && currentArr.includes("5") && currentArr.includes("6") ||
            currentArr.includes("7") && currentArr.includes("8") && currentArr.includes("9") ||
            currentArr.includes("1") && currentArr.includes("4") && currentArr.includes("7") ||
            currentArr.includes("2") && currentArr.includes("5") && currentArr.includes("8") ||
            currentArr.includes("3") && currentArr.includes("6") && currentArr.includes("9") ||
            currentArr.includes("1") && currentArr.includes("5") && currentArr.includes("9") ||
            currentArr.includes("3") && currentArr.includes("5") && currentArr.includes("7")) {
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

            currentArr = player2Slots;

            setTimeout(() => {
                // code to run after 0.5 seconds
                selectSlot(currentPlayer, currentArr, choice, documentSlots[Number(choice) - 1]);
                activateSlotsEventListeners;
            }, 50);

        }

    } else {
        console.log(`${slotValue} is marked`)
    }

}

function activateSlotsEventListeners() {
    documentSlots.forEach(slot => {
        slot.addEventListener("click", () => {
            let slotValue = slot.getAttribute("index");
            console.log(`clicked Value Element -> ${slotValue}`)

            let currentArr = currentPlayer === player1 ? player1Slots : player2Slots

            selectSlot(currentPlayer, currentArr, slotValue, slot);
        })

    })
}

function getSlotValue(){
    
}
