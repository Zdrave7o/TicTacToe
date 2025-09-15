const player1Slots = [];
const player2Slots = [];
const slots = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

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
            player1Slots.push(slotValue);
            player1Slots.forEach(item => {
                item = Number();
            })

            player1Slots.sort((x, y) => x - y)

            player1Slots.forEach(item =>{
                item = item.toString();
            })
            let str = player1Slots.join("");
            if(str.includes("123")){
                console.log("player 1 wins!");
                return;
            }


            slot.innerHTML = "<h1>X</h1>";
            currentPlayer = "player2"
        } else{
            player2Slots.push(slotValue);
            slot.innerHTML = "<h1>O</h1>";
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