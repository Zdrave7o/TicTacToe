const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const player1 = "Player1";
const player2 = "Player2";
let symbol = "X";

let currentPlayer = player1;

const documentSlots = document.querySelectorAll(".slot");

window.addEventListener("DOMContentLoaded", activateSlotsEventListeners);

function selectSlot(player, currentArr, slotValue, slot){
    if(slots.includes(slotValue)){
        player === player1? symbol="X":symbol ="O";


        let removableIndex = slots.indexOf(slotValue);
        slots.splice(removableIndex, 1);
        console.log(`${currentPlayer} chose ${slotValue}`);
        slot.innerHTML = `<h1>${symbol}</h1>`;

        currentArr.push(slotValue);

        currentArr.forEach(item => {
            item = Number();
        })
        currentArr.sort((x, y) => x - y);

        let str = currentArr.join("");

        if (str.includes("123") || str.includes("456") || str.includes("789")) {
            window.alert(`${currentPlayer} wins!`);
            return;
        } else if (str.includes("1") && str.includes("4") && str.includes("7") ||
            (str.includes("2") && str.includes("5") && str.includes("8")) ||
            (str.includes("3") && str.includes("6") && str.includes("9"))) {
            window.alert(`${currentPlayer} wins!`);
            return;
        } else if (str.includes("1") && str.includes("5") && str.includes("9") ||
            (str.includes("3") && str.includes("5") && str.includes("7"))) {
            window.alert(`${currentPlayer} wins!`);
            return;
        }

        currentPlayer = player === player1? player2:player1;
    } else{
        console.log(`${slotValue} is marked`)
    }
}   

function activateSlotsEventListeners(){
    documentSlots.forEach(slot => {
    slot.addEventListener("click",() =>{

        let slotValue = slot.getAttribute("index"); 
        console.log(`clicked Value Element -> ${slotValue}`)
        
        let currentArr = currentPlayer === player1? player1Slots:player2Slots

        selectSlot(currentPlayer, currentArr, slotValue, slot);
    } )
    
})
}