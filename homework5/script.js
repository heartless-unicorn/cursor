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
  let count = 0;
  let result;

  console.log(numbers);
  numbers = numbers.map((value, i, arr) => {
    if (value === numbers[i + 1] && Number.isInteger(value)) {
      let last = arr.lastIndexOf(value);
      if (count < last - i) {
        count = last - i;
        result = value;
      }
    }
  });
  console.log(result);
}
function getAvarage(...numbers) {
  let result = 0;

  result = numbers.reduce((total, current) => {
    if (!Number.isInteger(current)) {
      return total;
    }
    return total + current;
  }, 0);
}
function getMedian(...numbers) {}
getModa(2.1, 2.5, 10, 1, 5, 10, 12, 2.5, 1, 4.6, 10, 1);
