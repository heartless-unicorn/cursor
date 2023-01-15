function generateBlocks() {
  let squareAmount = 5;
  for (let i = 0; i < squareAmount; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < squareAmount; i++) {
      let element = document.createElement("div");
      element.classList.add("block");
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      element.style.backgroundColor = `#${randomColor}`;
      row.appendChild(element);
    }
    row.classList.add("row");
    document.body.appendChild(row);
  }
}
function generateBlocksInterval() {
  let squareAmount = 5;
  for (let i = 0; i < squareAmount; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < squareAmount; i++) {
      let element = document.createElement("div");
      element.classList.add("block");

      setInterval(() => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        element.style.backgroundColor = `#${randomColor}`;
      }, 1000);

      row.appendChild(element);
    }
    row.classList.add("row");
    document.body.appendChild(row);
  }
}

generateBlocksInterval();
