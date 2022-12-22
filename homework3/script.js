// Function 1
function getMaxDigits(number) {
  let arr = Array.from(`${number}`);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
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
  return result;
}
// Function 3
function transformName(name) {
  let result = name.toLowerCase().trim();
  let firstLetter = result[0].toUpperCase();
  result = result.replace(result[0], firstLetter);
  return result;
}

// Function 4
function afterTax(sum) {
  const tax = 0.195;
  let result = sum - sum * tax;
  return result;
}

// function 5
function getRandomNumber(n, m) {
  let result = Math.round(Math.random() * (m - n + 1) + n);
  return result;
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
  return result;
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
  } else if (currency == "$") {
    result = (+result * 36, 41) + "UAH";
  } else {
    result = "Not the right currency";
  }
  return result;
}
//function 9,10
function randomPassword(length = 8) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result = result + getRandomNumber(0, 9);
  }
  return result;
}
//function 11
function deleteLetters(letter, str) {
  let result = str.toLowerCase().replaceAll(letter, "");
  return result;
}
//function 12
function isPalyndrom(str) {
  let original = str.replaceAll(" ", "").toLowerCase();
  let reverse = Array.from(original).reverse().join();
  reverse = reverse.replaceAll(",", "");
  if (original == reverse) {
    return "Так";
  } else {
    return "Ні";
  }
}

// function 13
function deleteDuplicateLetter(str) {
  str = str.toLowerCase().trim().replaceAll(" ", "");
  let result = str;
  for (letter in str) {
    let last = str.lastIndexOf(str[letter]);
    if (letter != last) {
      result = result.replaceAll(str[letter], "");
    }
  }
  return result;
}
deleteDuplicateLetter("Бісквіт був дуже ніжним");

document.writeln(
  `Function 1: Найбільша цифра в числі 987 ✨ ${getMaxDigits(987)} ✨ <br/>
   Function 2: 9 в 6 степені ✨  ${powerFunc(9, 6)} ✨ <br/>
   Function 3: Відформатоване ім'я ВЛаД ✨${transformName("ВЛаД")}✨ <br/>
   Function 4: Сума заробітньої плати після оплати податку з 1000 ✨${afterTax(
     1000
   )}✨ <br/>
   Function 5: Випадкове ціле число від 5 до 28 ✨${getRandomNumber(
     5,
     28
   )}✨ <br/>
   Function 6: Буква "а" в слові "Асталавіста" повторюєся ✨${getRepeatLetters(
     "а",
     "Асталавіста"
   )}✨ разів  <br/>
   Function 7: 250 гривень це ✨${convertCurency("250UAH")}✨ доларів<br/>
   Function 8: Рандомний пароль з 5 цифр ✨${randomPassword(5)}✨ <br/>
   Function 9: "Асталавіста" без "а" ✨${deleteLetters(
     "а",
     "Асталавіста"
   )}✨ <br/>
   Function 10: "Я несу гусеня" це палідрон? ✨${isPalyndrom(
     "Я несу гусеня"
   )}✨  <br/>
   Function 11: Букви які не повторюються в реченні "Бісквіт був дуже ніжним" ✨${deleteDuplicateLetter(
     "Бісквіт був дуже ніжним"
   )}✨  <br/>
`
);
