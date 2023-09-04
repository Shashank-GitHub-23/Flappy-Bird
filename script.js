let hole = document.getElementById("hole");


hole.addEventListener("animationiteration", holeMovement);

function holeMovement(){
    let calculatehole = -((Math.random()*350)+150);
    let newTop = calculatehole + 'px';
    hole.style.top = newTop;
}