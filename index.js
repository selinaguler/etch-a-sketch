function makeRows(rows, cols) {
  const box = document.getElementById("box");

  box.innerHTML = ""; // this will clear old divs before we set new columns and rows.
  // set variable value on box
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', cols);
  let cell;
  for (let c = 0; c < (rows * cols); c++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.innerText = (c + 1);
    box.appendChild(cell);

    //cell.addEventListener("mouseenter", () => {
    //  cell.style.backgroundColor = "red";
    //});
  };
};

makeRows(16, 16);






const button = document.getElementById("button");

button.addEventListener("click", () => {
  const rows = Number(prompt("Enter number of rows (max 50):"));
  const cols = Number(prompt("Enter number of columns (max 50):"));

  if (
    !isNaN(rows) && rows > 0 && rows <= 65 &&
    !isNaN(cols) && cols > 0 && cols <= 65
  ) {
    makeRows(rows, cols);
  } else {
    alert("Please enter positive numbers up to 50!");
  }
});
