let hole = document.getElementById("hole");
let CurrentflyValue = 0;

hole.addEventListener("animationiteration", holeMovement);

function holeMovement(){
    let calculatehole = -((Math.random()*350)+150);
    let newTop = calculatehole + 'px';
    hole.style.top = newTop;
}

let fall = setInterval( function () {
    let fallValue = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if (CurrentflyValue == 0) {
        bird.style.top = (fallValue + 2) + "px"; 
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (( birdTop > 450) || ((blockLeft < 50) && (blockLeft > -98) && ((birdTop < newTop) || (birdTop > newTop + 150))))
    {
        game.style.display = "none";
            }
        
},10 )

let birdFly = () => {
    CurrentflyValue = 1;
    let flyValue = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (flyValue - 65) + 'px';

    setTimeout( () => CurrentflyValue = 0, 100 );
}

window.addEventListener("keydown", birdFly);

function gameOver(){
    
}