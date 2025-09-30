function makeRows(rows, cols) {
  const box = document.getElementById("box");
  // set variable value on box
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', cols);
  let cell;
  for (let c = 0; c < (rows * cols); c++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.innerText = (c + 1);
    box.appendChild(cell);
  };
};

makeRows(16, 16);

const element = document.querySelectorAll(".grid-item");

element.addEventListener('mouseenter', () => {
  element.style.backgroundColor = 'red';
});

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const answer = Number(prompt("New grid number:"));
  if (!isNaN(answer) && answer > 0) {
    makeRows(answer, answer);
  }
});
