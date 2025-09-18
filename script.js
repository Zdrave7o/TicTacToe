const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

let player1 = "Player1";
let player2 = "computer";
let symbol = "X";

let currentPlayer = player1;

const documentSlots = document.querySelectorAll(".slot");
const opponentBtn = document.querySelector("#opponentBtn");
const opponentText = document.querySelector(".opponentText");

opponentBtn.onclick = changeOpponent;

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

            if(player1Slots.includes("1")){
                if(player1Slots.includes("2") && slots.includes("3")){

                    choice = slots[slots.indexOf("3")];

                } else if(player1Slots.includes("3") && slots.includes("2")){

                    choice = slots[slots.indexOf("2")];

                } else if(player1Slots.includes("4") && slots.includes("7")){

                    choice = slots[slots.indexOf("7")];

                } else if(player1Slots.includes("7") && slots.includes("4")){

                    choice = slots[slots.indexOf("4")];

                } else if(player1Slots.includes("5") && slots.includes("9")){

                    choice = slots[slots.indexOf("9")];
 
                } else if(player1Slots.includes("9") && slots.includes("5")){

                    choice = slots[slots.indexOf("5")];

                }
            }
            console.log(`choice ${choice}`);

            currentArr = player2Slots;
            documentSlots.forEach(slot => {
                slot.onclick = () => {
                    window.alert("please wait!");
                }

            })

            setTimeout(() => {
                // code to run after 0.5 seconds
                selectSlot(currentPlayer, currentArr, choice, documentSlots[Number(choice) - 1]);
                activateSlotsEventListeners();
            }, 500);

        }

    } else {
        console.log(`${slotValue} is marked`)
    }

}

function activateSlotsEventListeners() {
    documentSlots.forEach(slot => {
        slot.onclick = () => {
            let slotValue = slot.getAttribute("index");
            console.log(`clicked Value Element -> ${slotValue}`)

            let currentArr = currentPlayer === player1 ? player1Slots : player2Slots

            selectSlot(currentPlayer, currentArr, slotValue, slot);
        }

    })
}


function changeOpponent(){
    player2 === "computer"? player2 = "player2": player2 = "computer"
    opponentBtn.innerHTML = player2 === "computer"? "Play VS Person":"Play VS Bot";
    opponentText.innerHTML = player2 === "computer"? "Current Opponent: BOT":`Current Opponent: ${player2}`;
}


