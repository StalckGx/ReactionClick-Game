const container = document.querySelector(".container");
const startGame = document.querySelector(".startGame");
const scoreArea = document.querySelector(".score");

let player = {
    score:0
};

startGame.addEventListener("click", function() {
    startGame.style.display = "none";
    let ranTime = Math.random() * 2000 + 1000;
    setTimeout(makeitem, ranTime);
})

function makeitem() {
    
}