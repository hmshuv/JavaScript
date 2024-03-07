let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn"); // Corrected the ID to reset-btn
let msgContainer = document.querySelector(".msg-container-hide");
let winnerMsg = document.querySelector("#msg");
let newButton = document.querySelector(".new-btn")




let turnO = true; // playerX playerO

// 2D array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!!!");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X"
            turnO = true;

        }
        box.disabled = true;

        checkWinner();

    });
});

const showWinner = (winner) => {
    console.log("hello");
      msg.innerText= `congratulations, the winner is ${winner}`;
      msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    
                    console.log(`player ${pos1Val} won the game!!!!`);
                    showWinner(pos1Val);
                   
                }
               
            }
            


    }
}