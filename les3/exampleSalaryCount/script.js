// function helloName(name) {
//   console.log(name);
// }

//helloName("John"); // Output: John

// // Function with default parameter value
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

//greet(); // Output: Hello, Guest!

function hello() {
  console.log('Hello function');
}
hello();

// Вызываем функцию с указанным параметром
const salaryCalc = (money) => {
  money = money * 0.87; // money - money * 0.13 вычитаем 13% из ЗП
  return money * 0.75; // еще 25% из ЗП откладываем
}
console.log(salaryCalc(100000)); // Output: 65250 - остаток от ЗП после уплаты налога и отложенной суммы

// Вызываем функцию с запросом данных от пользователя
const salary = (money) => {
  money = money * 0.87; // money - money * 0.13 вычитаем 13% из ЗП
  return money * 0.75; // еще 25% из ЗП откладываем
}
const inputMoney = prompt('Введите вашу зарплату:');
let moneyMonth = salary(inputMoney); // пример использования функции внутри функции
console.log(salary(inputMoney)); // остаток от ЗП после уплаты налога и отложенной суммы
console.log(`На расходы можно использовать ${salary(inputMoney)}`);
console.log(`На еду можно потратить ${moneyMonth * 0.3}`); // пример подсчета