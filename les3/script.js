// вызов функции при клике
// function sayHello() {
//   alert('Hello');
//   alert('Вы нажали на кнопку');
// }

// пример с загадкой
// const userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer.toLowerCase() === 'елка') {
//   console.log('Молодец, угадал!');
// } else {
//   console.log('Не угадал.');
// }

// если несколько загадок, можно каждый раз прописывать загадку с условием поменяв const на let
// let userAnswer2 = prompt('Зимой и летом одним цветом');

// if (userAnswer2.toLowerCase() === 'елка') {
//   console.log('Молодец, угадал!');
// } else {
//   console.log('Не угадал.');
// }

// let userAnswer3 = prompt('Сидит дед, во сто шуб одет');

// if (userAnswer2.toLowerCase() === 'лук') {
//   console.log('Молодец, угадал!');
// } else {
//   console.log('Не угадал.');
// }

// вариант с использованием function
function askQuestion(answer, question) {
  const userAnswer4 = prompt(question);

  if (userAnswer4.toLowerCase() === answer) {
    console.log('Молодец, угадал!');
  } else {
    console.log('Не угадал.');
  }
}
// askQuestion('лук', 'Сидит дед, во сто шуб одет');
// askQuestion('елка', 'Зимой и летом одним цветом');

// передаем ответы в функцию, которая активируется при нажатии на кнопку
function puzzle() {
  askQuestion('лук', 'Сидит дед, во сто шуб одет');
  askQuestion('елка', 'Зимой и летом одним цветом');
}