let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn"); // Corrected the ID to reset-btn

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


const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, 
            boxes[pattern[1]].innerText, 
            boxes[pattern[2]].innerText);

    }
}