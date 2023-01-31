const idGenerator = createIdGenerator();
function* createIdGenerator() {
  let index = 0;
  for (let i = 0; i < Infinity; i++) {
    index++;
    yield i;
  }
  return index;
}
console.log(
  idGenerator.next().value,
  idGenerator.next().value,
  idGenerator.next().value
);

function* newFontGenerator(size) {
  let fontSize = size;

  let count = yield fontSize;
  while (true) {
    if (count === "up") {
      fontSize += 2;

      count = yield fontSize;
    } else if (count === "down") {
      fontSize -= 2;

      count = yield fontSize;
    } else {
      count = yield fontSize;
    }
  }
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
