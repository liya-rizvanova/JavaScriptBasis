// let count = 0;
// while (count < 3) {
//   console.log('Hello');
//   count++;
// }

// for (let i = 0; i < 3; i++) {
//   console.log('Hello for');
// }

// for (let j = 0; j <= 2; j++) {
//   console.log(j);
// }

// запрос пароля с проверкой соответствия
// let pass;
// do {
//   pass = Number(prompt('Введите пароль'));
// } while (pass !== 234);


// запрос пароля с подсказкой
// let pass;
// let count = 0;
// do {
//   pass = Number(prompt('Введите пароль'));
//   count++;
//   if (count >= 3) {
//     alert('Пароль неверный!')
//   }
// } while (pass !== 234);

// код, который выводит предупреждение только если все три попытки оказались неудачными
// let pass;
// let isCorrect = false; // Флаг для проверки успешного ввода пароля

// for (let i = 0; i < 3; i++) {
//   pass = Number(prompt('Введите пароль'));

//   if (pass === 234) {
//     alert('Пароль верный!');
//     isCorrect = true; // Устанавливаем флаг, если пароль введен правильно
//     break; // Прерываем цикл при успешной попытке
//   }
// }

// if (!isCorrect) {
//   alert('Пароль неверный!'); // Сообщение, если все попытки неудачны
// }

// массивы
// const arr = [1, 2, 'hello', 5, 'world'];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// const user = [];
// const userName = prompt('Your Name');
// const userAge = Number(prompt('Your Age'));

// user.push(userName, userAge);

// console.log(user);

// next example
// const numbers = [11, 2, 53, 4, 55];
// console.log(numbers);
// alert(`Remember last number ${numbers}`)
// // выводит последнюю цифру
// console.log(numbers[numbers.length - 1]); 
// // выводит последнюю цифру при помощи функции pop
// console.log(numbers.pop());
// // pop убирает последний элемент массива
// console.log(numbers);

// Также этот метод позволяет получать последний элемент из строки, которую можно разделить на части, например у нас есть полный путь до файла C:/projects/bestProject/src/images/background-image.png и мы хотим из этого пути получить только файл. Всю строку можно разбить на части, разделенные символом косой черты (слеш “/”), и взять последнюю такую часть, давайте посмотрим пример кода:
//const filePathPop = "C:/projects/bestProject/src/images/background-image.png";
//const fileName = filePathPop.split('/').pop(); // Разделим строку на составляющие и превратим её в массив по средствам split('/'), а потом уже вызовем новый метод pop()
//console.log(fileName); // "background-image.png"

// пример с разбиением слова на массив

// const word = "JavaScript";
// // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// console.log(word.split(''));
// // ['JavaScript']
// console.log(word.split(','));

// const wordE = "example";
// const arrWordE = wordE.split('');
// // e
// // console.log(arrWordE.pop());

// // перевод первой буквы слова в верхний регистр E
// const upWordE = arrWordE.pop();
// console.log(upWordE.toUpperCase());

// // объединение exampl + E
// arrWordE.push(upWordE.toUpperCase());
// console.log(arrWordE.join(''));

// Этот метод произошел от английского слова shift - сдвигать. Данный метод извлекает нулевой элемент из массива, при этом сдвигает все оставшиеся элементы массива на одну ячейку влево. Получим первого студента, записавшегося на курс. Также методом shift можно получить имя диска, из полного пути до файла:
// const filePathShift = "C:/projects/bestProject/src/images/background-image.png";
// const diskName = filePathShift.split('/').shift(); // Разделим строку на составляющие и превратим её в массив по средствам split('/'), а потом уже вызовим новый метод shift()
// console.log(diskName); // "C:"

// // использование массивов совместно с циклом

// const arrAnswer = ['елка', 'ёлка', 'ель'];
// const userAnswer = prompt('Зимой и летом одним цветом');

// for (let i = 0; i < arrAnswer.length; i++) {
//   const element = arrAnswer[i];
//   if (element === userAnswer.toLowerCase()) {
//       console.log('Молодец');
//       break;
//   } else {
//       continue;
//   }
// }

// function incrementCount() {
//   count++;
//   console.log('Count:', count);
// }
