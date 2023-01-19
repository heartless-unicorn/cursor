async function getRandomChinese(length) {
  let result = "";
  while (length > 0) {
    let sign = String.fromCharCode(Date.now().toString().slice(-5));
    result += sign;
    await new Promise((resolve) => setTimeout(() => resolve(result), 50));
    length--;
  }
  console.log(result);
}
getRandomChinese(4);
