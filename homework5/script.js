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
function getAverage(...numbers) {
  let result = 0;
  result = numbers.reduce((total, current) => {
    if (!Number.isInteger(current)) {
      return total;
    }
    return total + current;
  }, 0);
  return result / numbers.length;
}
function getMedian(...numbers) {
  numbers = numbers.sort((a, b) => a - b);
  numbers = numbers.filter((value) => Number.isInteger(value));
  let result = 0;
  if ((numbers.length / 2) % 2 === 0) {
    result =
      (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
  } else {
    result = numbers[Math.floor(numbers.length / 2)];
  }
  return result;
}
function filterEvenNumbers(...numbers) {
  numbers = numbers.filter((value) => !(value % 2 === 0));
  return numbers;
}
function countPositiveNumbers(...numbers) {
  let result = 0;
  numbers.filter((value) => {
    if (value > 0) {
      result += 1;
    }
  });
  return result;
}
function getDividedByFive(...numbers) {
  numbers = numbers.filter((value) => value % 5 === 0);
  return numbers;
}
function replaceBadWords(str) {
  const badWords = ["shit", "fuck"];
  let result = str.split(" ");
  badWords.forEach((value) => {
    result = result.map((element) => {
      if (element.includes(value)) {
        element = element.replace(`${value}`, "****");
      }
      return element;
    });
  });
  return result.join(" ");
}
function divideByThree(str) {
  let result = [];
  str = str.toLowerCase();
  if (str.length > 3) {
    str = str.replace(" ", "").split("");
    while (str.length > 0) {
      result.push(str.slice(0, 3).join(""));
      str = str.slice(3);
    }
    return result;
  } else {
    return str;
  }
}
function generateCombinations(str) {
  if (str.length < 10) {
    let result = [str];
    let length = 1;
    for (let i = 1; i <= str.length; i++) {
      length = length * i;
    }
    let stringArr = Array.from(str);
    let random = Array(str.length).fill(0);
    while (length > 1) {
      for (let i in random) {
        let randomLetter = Math.round(Math.random() * (stringArr.length - 1));
        random[i] = stringArr[randomLetter];
        stringArr.splice(randomLetter, 1);
      }
      let randomString = random.join("");
      if (result.includes(randomString) || randomString == "") {
        stringArr = Array.from(str);
        continue;
      }
      result.push(randomString);
      stringArr = Array.from(str);
      length--;
    }
    return result;
  }
}
document.writeln(`
Функція №1: Масив 15 випадкових чілих чисел від 1 до 100: ✨ ${getRandomArray(
  15,
  1,
  100
)}✨ </br>
Функція №2: Мода чисел 6,2,55,11,78,2,55,77,57,87,23,2,56,3,2: ✨ ${getModa(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}✨ </br>
Функція №3: Середнє арифметичне чисел 6,2,55,11,78,2,55,77,57,87,23,2,56,3,2: ✨ ${getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}✨ </br>
Функція №4: Модіана чисел 6,2,55,11,78,2,55,77,57,87,23,2,56,3,2: ✨ ${getMedian(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}✨ </br>
Функція №5: Непарні числа з 1, 2, 3, 4, 5, 6 : ✨ ${filterEvenNumbers(
  1,
  2,
  3,
  4,
  5,
  6
)}✨ </br>
Функція №6: Чисел більше 0 з: 1,
  -2,
  3,
  -4,
  -5,
  6  : ✨ ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}✨ </br>
  Функція №7: З чисел 6,2,55,11,78,2,55,77,57,87,23,2,56,3,2 на п'ять діляться: ✨ ${getDividedByFive(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}✨ </br>
    Функція №8: З цензурою "Are you fucking kidding?" : ✨ ${replaceBadWords(
      "Are you fucking kidding?"
    )}✨ </br>
    Функція №9: Поділено по три букви  "Commander" : ✨ ${divideByThree(
      "Commander"
    )}✨ </br>
    Функція №10: Унікальні комбінації слова  "man" : ✨ ${generateCombinations(
      "man"
    )}✨ </br>
`);
generateCombinations("live");
