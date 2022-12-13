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
  let power = function () {
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
  }
}
