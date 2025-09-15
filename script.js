const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

let currentPlayer = "player1";

const documentSlots = document.querySelectorAll(".slot");

window.addEventListener("DOMContentLoaded", activateSlotsEventListeners);

function selectSlot(player, slotIndex){
   
}   

function activateSlotsEventListeners(){
    documentSlots.forEach(slot => {
    slot.addEventListener("click",() =>{
        let slotValue = slot.getAttribute("index"); 
        console.log(`clicked Value Element -> ${slotValue}`)
        selectSlot(currentPlayer, slotValue);
    } )
    
})
}