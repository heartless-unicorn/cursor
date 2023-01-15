function generateBlocks() {
  let squareAmount = 5;
  for (let i = 0; i < squareAmount; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < squareAmount; i++) {
      let element = document.createElement("div");
      element.classList.add("block");
      row.appendChild(element);
    }
    row.classList.add("row");
    document.body.appendChild(row);
  }
}

generateBlocks();
