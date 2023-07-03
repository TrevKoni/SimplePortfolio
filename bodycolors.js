const backGround = document.getElementById("background-cl");
const theBody = document.getElementById("main");

theBody.addEventListener('mousemove', changeColor);

function changeColor(e) {
    backGround.style.backgroundColor = 'rgb('+e.offsetX+', 40, '+e.offsetY+')';
}