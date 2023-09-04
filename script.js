let hole = document.getElementById("hole");
let CurrentflyValue = 0;

hole.addEventListener("animationiteration", holeMovement);

function holeMovement(){
    let calculatehole = -((Math.random()*350)+150);
    let newTop = calculatehole + 'px';
    hole.style.top = newTop;
}

let fall = setInterval(() => {
    let fallValue = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if (CurrentflyValue == 0) {
        bird.style.top = (fallValue + 2) + "px"; 
    }
},10);

let birdFly = () => {
    CureentflyValue = 1;
    let flyValue = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (flyValue - 65) + 'px';

    setTimeout( () => CurrentflyValue = 0, 100 );
}

window.addEventListener("keydown", birdFly);