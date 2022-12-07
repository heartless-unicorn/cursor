let first = 15.678;
let second = 123.965;
let third = 90.2345;
let sum = first + second + third;
let roundedSum = Math.trunc(first) + Math.trunc(second) + Math.trunc(third);
let mean = sum / 3;
let randomDiscount = Math.floor(Math.random() * 100);
let discountedPrice = sum - sum * (randomDiscount / 100);
let cost = roundedSum / 2;

let result = `Максимальна ціна: ${Math.max(first, second, third)} </br>
                    Мінімальна ціна: ${Math.min(first, second, third)} </br>
                    Вартість всіх товарів: ${sum}</br>
                    Сума всіх округленних вартостей: ${roundedSum} </br>
                    Сума всіх товарів округлена до 100: ${
                      Math.round(roundedSum / 100) * 100
                    }</br>
                    Чи сума є парним значенням: ${
                      Boolean(roundedSum % 2 == 0) ? "так" : "ні"
                    } </br>
                    Решта: ${500 - sum} </br>
                    Середнє значення цін: ${mean.toFixed(2)} </br>
                    Випадкова знижка: ${randomDiscount}%</br>
                    Сума до оплати зі знижкою:  ${discountedPrice.toFixed(
                      2
                    )}</br>
                    Чистий прибуток: ${cost - randomDiscount}`;

document.writeln(result);
