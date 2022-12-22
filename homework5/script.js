function getRandomArray(length, min, max) {
  let arr = Array(length).fill(0);
  arr = arr.map((value) => {
    value = Math.round(Math.random() * (max - min + 1) + min);
    return value;
  });
  return arr;
}
function getModa(...numbers) {
  numbers = numbers.sort();
}
function getAvarage(...numbers) {
  let result = 0;

  result = numbers.reduce((total, current) => {
    if (!Number.isInteger(current)) {
      return total;
    }
    return total + current;
  });

  console.log(result);
}
function getMedian(...numbers) {}
getAvarage(1, 2.5, 10, 5.78, 3, -5);
