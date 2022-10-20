console.log("log")
const btnRed = document.getElementById("red");
btnRed.addEventListener("click", function () {
document.querySelector("body").style.color = "red"
});

const btnBlack = document.getElementById("black");
btnBlack.addEventListener("click", function () {
document.querySelector("body").style.color = "black"
});

const btnGreen = document.getElementById("green");
btnGreen.addEventListener("click", function () {
document.querySelector("body").style.color = "green"
});