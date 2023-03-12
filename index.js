// Your code here
const dodger = document.getElementById("dodger");
const leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    if (left > 0) {
        left -= 1;
        dodger.style.left = `${left}px`;
    }
}

function moveDodgerRight() {
    if(left <= 360) {
        left += 1;
        dodger.style.left = `${left}px`;
    }
}