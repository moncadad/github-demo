const circle = document.querySelector(".wrapper");
const surprise = document.querySelector(".surprise");
console.log('hi cutie');
console.log('hola comadres');
console.log('amigo que onda');
circle.addEventListener("click", handleClick);

function handleClick() {
  circle.style.borderRadius = "2rem";
  circle.style.background = "red";
}

function buttonClick() {
  circle.style.display = "none";
  surprise.style.display = "block";
}
