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
  numbers = numbers.map((value, i, arr) => {
    if (value === numbers[i + 1] && Number.isInteger(value)) {
      let last = arr.lastIndexOf(value);
      if (count < last - i) {
        count = last - i;
        result = value;
      }
    }
  });
  return result;
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
function getMedian(...numbers) {
  numbers = numbers.sort((a, b) => a - b);
  numbers = numbers.filter((value) => Number.isInteger(value));
  let result = 0;
  console.log(numbers);
  if ((numbers.length / 2) % 2 === 0) {
    result =
      (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
  } else {
    result = numbers[Math.floor(numbers.length / 2)];
  }
  return result;
}
