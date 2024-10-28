// ### Задание 1: Сумма чисел
// Напиши функцию, которая принимает массив чисел и возвращает их сумму, используя только reduce.

// Пример массива:
// [1, 2, 3, 4, 5]
// function sumArray(arr) {
//     return arr.reduce((acc, c) => acc + c, 0);
// }

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers1));

// ### Задание 2: Произведение чисел
// Создай функцию, которая принимает массив чисел и возвращает их произведение с помощью только reduce.

// Пример массива:
// [1, 2, 3, 4]

// function multiplyArray(arr) {
//     return arr.reduce((ac, c) => acc * c, 1);
// }

// const numbers2 = [1, 2, 3, 4];
// console.log(multiplyArray(numbers2)); 

// ### Задание 3: Поиск максимального числа
// Используя только reduce, напиши функцию, которая находит и возвращает максимальное число в массиве.

// Пример массива:
// [10, 5, 8, 20, 3]

// function findMax(arr) {
//     return arr.reduce((max, c) => (c > max ? c : max), arr[0]);
// }

// const numbers3 = [10, 5, 8, 20, 3];
// console.log(findMax(numbers3)); 

// ### Задание 4: Поиск минимального числа
// Напиши функцию, которая с помощью только reduce находит и возвращает минимальное число в массиве.

// Пример массива:
// [10, 5, 8, 20, 3]
// function findMin(arr) {
//     return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
// }

// const numbers4 = [10, 5, 8, 20, 3];
// console.log(findMin(numbers4)); 

// ### Задание 5: Объединение чисел в строку
// Создай функцию, которая принимает массив чисел и возвращает строку, состоящую из всех элементов массива, соединённых без пробелов, используя только reduce.

// Пример массива:
// // [1, 2, 3, 4, 5]
// function joinNumbers(arr) {
//     return arr.reduce((accumulator, current) => accumulator + current, '');
// }

// const numbers5 = [1, 2, 3, 4, 5];
// console.log(joinNumbers(numbers5)); 

// ### Задание 6: Сумма значений по ключу
// Дан массив объектов, каждый из которых содержит числовое свойство value. Напиши функцию, которая с помощью только reduce суммирует все значения value.

// Пример массива:
// [{ value: 10 }, { value: 20 }, { value: 30 }]

// function sumValues(arr) {
//     return arr.reduce((accumulator, current) => accumulator + current.value, 0);
// }

// const objects = [{ value: 10 }, { value: 20 }, { value: 30 }];
// console.log(sumValues(objects));

// ### Задание 7: Подсчет количества определенных значений
// Дан массив, содержащий только строки "да" и "нет". Напиши функцию, которая с помощью только reduce подсчитывает количество строк "да".

// Пример массива:
// ["да", "нет", "да", "нет", "да"]

// function countYes(arr) {
//     return arr.reduce((accumulator, current) => {
//         return current === 'да' ? accumulator + 1 : accumulator;
//     }, 0);
// }

// const responses = ["да", "нет", "да", "нет", "да"];
// console.log(countYes(responses)); 

// ### Задание 8: Удаление дубликатов
// Напиши функцию, которая с помощью только reduce удаляет дубликаты из массива.

// Пример массива:
// [1, 2, 2, 3, 4, 4, 5]
// function removeDuplicates(arr) {
//     return arr.reduce((accumulator, current) => {
//         if (!accumulator.includes(current)) {
//             accumulator.push(current);
//         }
//         return accumulator;
//     }, []);
// }

// const numbers8 = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers8));

// ### Задание 9: Подсчет частоты элементов
// Дан массив чисел. Напиши функцию, которая с помощью только reduce подсчитывает, сколько раз каждое число встречается в массиве и возвращает объект с результатом.

// Пример массива:
// [1, 2, 2, 3, 3, 3, 4]

// function countFrequency(arr) {
//     return arr.reduce((accumulator, current) => {
//         accumulator[current] = (accumulator[current] || 0) + 1;
//         return accumulator;
//     }, {});
// }

// const numbers9 = [1, 2, 2, 3, 3, 3, 4];
// console.log(countFrequency(numbers9)); 

// ### Задание 10: Обратный порядок чисел
// Напиши функцию, которая с помощью только reduce переворачивает массив чисел в обратном порядке.

// Пример массива:
// [1, 2, 3, 4, 5]
// function reverseArray(arr) {
//     return arr.reduce((accumulator, current) => [current, ...accumulator], []);
// }

// const numbers10 = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers10)); 