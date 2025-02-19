const conatiner = document.querySelector(".contanier");
const animated = document.querySelector(".santa");
const audio = document.querySelector("#audio");
const unmuteButton = document.querySelector("#unmuteButton");

const snowing = () => {
  const snow = document.createElement("i");

  snow.classList.add("flake");
  snow.classList.add("far");
  snow.classList.add("fa-snowflake");

  snow.style.left = Math.random() * 100 + "%";

  conatiner.appendChild(snow);
};

setInterval(snowing, 200);
// animated.addEventListener("animationstart", play());
// function play() {
//   var audio = new Audio("HOHO.mp3");
//   audio.autoplay = true;
//   audio.play();
// }
unmuteButton.addEventListener("click", function () {
  audio.muted = false;
  audio.play();
});