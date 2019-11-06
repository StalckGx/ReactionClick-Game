const container = document.querySelector(".container");
const startGame = document.querySelector(".startGame");
const scoreArea = document.querySelector(".score");

let player = {
    score:0
};

startGame.addEventListener("click", function() {
    startGame.style.display = "none";
    scoreArea.innerHTML = "";

    let randTime = Math.random() * 2000 + 1000;
    setTimeout(makeitem, randTime);
})

function makeitem() {
    let boundary = container.getBoundingClientRect();
    let div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = Math.random() * boundary.width + "px";
    div.style.top = Math.random() * boundary.height + "px";
    div.style.width = Math.random() * 10 + 40 + "px";
    div.style.height = Math.random() * 10 + 40 + "px";
    div.style.cursor = "pointer";
    div.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
    div.style.border = "2px solid black";
    div.startTime = Date.now();

    div.addEventListener("click", function() {
        let endTime = Date.now();
        let difference = (endTime - div.startTime) / 1000;
        scoreArea.innerHTML = "Clicked in " + difference + " seconds!";
        startGame.style.display = "inline-block";
        container.removeChild(div);
    })
    
    container.appendChild(div);
}