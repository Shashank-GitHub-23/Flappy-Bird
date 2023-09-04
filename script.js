let hole = document.getElementById("hole");
let result = document.getElementById("result");
let text = document.getElementById("text");
let game = document.getElementById("game");
let CurrentflyValue = 0;
let score = 0;

hole.addEventListener("animationiteration", holeMovement);

function holeMovement(){
    let calculatehole = -((Math.random()*350)+150);
    let newTop = calculatehole + 'px';
    hole.style.top = newTop;
    score++;
}

let fall = setInterval( function () {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if (CurrentflyValue == 0) {
        bird.style.top = (birdTop + 2) + "px"; 
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let htop = (holeTop + 500);
    if (( birdTop > 450) || ((blockLeft < 50) && (blockLeft > -100) && ((birdTop < htop) || (birdTop > htop + 100))))
    {
        result.style.display = "block";
        text.innerText = `Score : ${score}`;
        game.style.display = "none";
        score = 0;
            }
        
},10 );

let birdFly = () => {
    CurrentflyValue = 1;
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdTop > 5){
        bird.style.top = (birdTop - 65) + 'px';
    } 

    setTimeout( () => CurrentflyValue = 0, 100 );
}

window.addEventListener("keydown", birdFly);
