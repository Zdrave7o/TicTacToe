const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const player1 = "Player1";
const player2 = "Player2"

let currentPlayer = "player1";

const documentSlots = document.querySelectorAll(".slot");

window.addEventListener("DOMContentLoaded", activateSlotsEventListeners);

function selectSlot(player, slotValue, slot){
    if(slots.includes(slotValue)){
        let removableIndex = slots.indexOf(slotValue);
        slots.splice(removableIndex, 1);
        console.log(`${currentPlayer} chose ${slotValue}`);
        const sortedArr = [];
        if(player === "player1"){
            slot.innerHTML = "<h1>X</h1>";

            player1Slots.push(slotValue);

            player1Slots.forEach(item => {
                item = Number();
            })
            player1Slots.sort((x, y) => x - y);

            let str = player1Slots.join("");
            
            if(str.includes("123") || str.includes("456") || str.includes("789")){
                window.alert(`${currentPlayer} wins!`);
                return;
            } else if(str.includes("1") && str.includes("4") && str.includes("7") || 
              (str.includes("2") && str.includes("5") && str.includes("8")) ||
              (str.includes("3") && str.includes("6") && str.includes("9"))){
                window.alert(`${currentPlayer} wins!`);
                return;
            } else if(str.includes("1") && str.includes("5") && str.includes("9") ||
             (str.includes("3") && str.includes("5") && str.includes("7"))){
                window.alert(`${currentPlayer} wins!`);
                return;
            }

            currentPlayer = "player2";
        } else{
            slot.innerHTML = "<h1>O</h1>";

            player2Slots.push(slotValue);

            player2Slots.forEach(item => {
                item = Number();
            })
            player2Slots.sort((x, y) => x - y);

            let str = player2Slots.join("");
            
            if(str.includes("123") || str.includes("456") || str.includes("789")){
                window.alert(`${currentPlayer} wins!`);
                return;
            } else if(str.includes("1") && str.includes("4") && str.includes("7") || 
              (str.includes("2") && str.includes("5") && str.includes("8")) ||
              (str.includes("3") && str.includes("6") && str.includes("9"))){
                window.alert(`${currentPlayer} wins!`);
                return;
            } else if(str.includes("1") && str.includes("5") && str.includes("9") ||
             (str.includes("3") && str.includes("5") && str.includes("7"))){
                window.alert(`${currentPlayer} wins!`);
                return;
            }
            currentPlayer = "player1";
        }
    } else{
        console.log(`${slotValue} is marked`)
    }
}   

function activateSlotsEventListeners(){
    documentSlots.forEach(slot => {
    slot.addEventListener("click",() =>{

        let slotValue = slot.getAttribute("index"); 
        console.log(`clicked Value Element -> ${slotValue}`)
        selectSlot(currentPlayer, slotValue, slot);
    } )
    
})
}