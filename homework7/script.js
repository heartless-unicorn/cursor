const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return this.tax * salary;
}

function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}
function getTotalTaxes(country) {
  return this.tax * this.middleSalary * this.vacancies;
}
function getMySalary(country) {
  const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
  const taxes = getMyTaxes.call(country, salary);
  const result = { salary, taxes, profit: Math.round(salary - taxes) };
  setInterval(() => console.log(result), 10000);
}
console.log(getMyTaxes.call(ukraine, 1000));
getMySalary(ukraine);
