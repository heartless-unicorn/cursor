// Function 1
function getMaxDigits(number) {
  let arr = Array.from(`${number}`);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i] > result) {
      result = arr[i];
    }
  }
}
// Function 2
function powerFunc(num, pow) {
  let result;
  const power = function () {
    result = num;
    for (pow; pow != 1; pow--) {
      result = result * num;
    }
  };
  if (pow >= 1) {
    power();
  } else if (pow < 0) {
    pow = pow * -1;
    power();
    result = 1 / result;
  } else if ((pow = 0)) {
    result = 1;
  }
}
// Function 3
function transformName(name) {
  let result = name.toLowerCase().trim();
  let firstLetter = result[0].toUpperCase();
  result = result.replace(result[0], firstLetter);
  alert(result);
}

// Function 4
function afterTax(sum) {
  const tax = 0.195;
  let result = sum - sum * tax;
}

// function 5
function getRandomNumber(n, m) {
  let result = Math.round(Math.random() * (m - n) + n);
  alert(result);
}
//function 6
function getRepeatLetters(letter, str) {
  let result = 0;
  str = str.toLowerCase();
  for (l in str) {
    if (str[l] === letter) {
      result += 1;
    }
  }
}
// function 7
function convertCurency(str) {
  str = str.trim();
  let result = "";
  let currency = "";
  for (char in str) {
    if (isNaN(str[char])) {
      currency += str[char];
    } else {
      result += str[char];
    }
  }
  if (currency != "$" && currency.toLowerCase() === "uah") {
    result = (+result * 0, 027) + "$";
  } else {
    result = (+result * 36, 41) + "UAH";
  }
}
