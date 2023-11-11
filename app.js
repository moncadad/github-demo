const circle = document.querySelector(".wrapper");
const surprise = document.querySelector(".surprise");

circle.addEventListener("click", handleClick);

function handleClick() {
  circle.style.borderRadius = "2rem";
  circle.style.background = "red";
}

function buttonClick() {
  circle.style.display = "none";
  surprise.style.display = "block";
}
