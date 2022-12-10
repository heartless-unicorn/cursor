let n = +prompt("Type the first number:");
while (isNaN(n) || !Number.isInteger(n)) {
  alert("Please type in a whole number");
  n = +prompt("Type the first number:");
}
let m = +prompt("Type the second number:");
while (isNaN(m) || !Number.isInteger(m)) {
  alert("Please type in a whole number");
  m = +prompt("Type the second number:");
}
let evenSkip = confirm("Do you want to skip even numbers?");
let result = 0;
for (n; n <= m; n++) {
  if (evenSkip) {
    if (Boolean(n % 2)) {
      result = result + n;
    }
  } else {
    result = result + n;
  }
}
document.writeln(`Your sum = ${result}`);
