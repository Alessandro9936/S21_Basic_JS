"use strict";

let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".subtract");
let refreshBtn = document.querySelector(".refresh");
let result = document.querySelector(".result");
let coin = document.querySelector(".coin");
let audio = document.querySelector(".coin-effect");

addBtn.textContent = "+";
subBtn.textContent = "-";
refreshBtn.textContent = "⟳";

let num;

function init() {
  num = 0;
  result.textContent = num;
}

function plusOne() {
  num++;
  result.textContent = num;

  if (num % 10 == 0 && num > 0) {
    coin.classList.add("animation");
    audio.play();
    audio.volume = 0.2;
  } else {
    coin.classList.remove("animation");
  }
}
function subOne() {
  num--;
  result.textContent = num;
}

function refresh() {
  return init();
}

window.addEventListener("click", function (e) {
  let btn = e.target;
  if (btn === addBtn) {
    plusOne();
  } else if (btn === subBtn) {
    subOne();
  } else if (btn === refreshBtn) {
    refresh();
  }
});

init();
