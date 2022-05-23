const leftSwitch = document.querySelector(".left-switch");
const centerSwitch = document.querySelector(".center-switch");
const rightSwitch = document.querySelector(".right-switch");

//Create buttons
const addBtn = document.createElement("button");
const subBtn = document.createElement("button");
const refreshBtn = document.createElement("button");
const result = document.createElement("span");

//Style buttons and result
result.classList.add("result");

[addBtn, subBtn, refreshBtn].forEach((btn) => btn.classList.add("btn-style"));

//Insert buttons in the DOM
leftSwitch.append(addBtn, refreshBtn);

const display = document.createElement("div");
display.classList.add("display");
centerSwitch.appendChild(display);
display.appendChild(result);

rightSwitch.appendChild(subBtn);

//Set text buttons
addBtn.textContent = "+";
subBtn.textContent = "-";
refreshBtn.textContent = "⟳";

export { addBtn, subBtn, refreshBtn, result };
