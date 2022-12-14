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
// function 7,8
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
//function 9,10
function randomPassword(length = 8) {
  let num = "1";
  for (let i = length; i > 0; i--) {
    num += "0";
  }
  let min = +num.slice(0, -1);
  let result = Math.round(Math.random().toFixed(length) * (+num - min) + min);
}
//function 11
function deleteLetters(letter, str) {
  let result = "";
  for (l in str) {
    if (str[l] !== letter) {
      result += str[l];
    }
  }
}
//function 12
function isPalyndrom(str) {
  let result;
  let original = str.replaceAll(" ", "").toLowerCase();
  console.log(original);
  let reverse = Array.from(original).reverse().join();
  reverse = reverse.replaceAll(",", "");
  if (original == reverse) {
    result = true;
  } else {
    result = false;
  }
}
