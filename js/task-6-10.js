// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
const price = 500;
const descont = 10;
const getPriceWithDescont = (price, descont) => (price * (100 - descont)) / 100;
console.log(getPriceWithDescont(price, descont));
// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
const floatNum = 5.21;
const roundToIntNum = num => Math.floor(num);
console.log(roundToIntNum(floatNum));
// Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
const border = '35.5px';
const getFloatNum = value => Number.parseFloat(value);
console.log(getFloatNum(border));
// Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
const width = '60px';
const getIntNum = value => Number.parseInt(value);
console.log(getIntNum(width));
// Створити змінну для зберігання числа.Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
const square = 65;
const getRoot = value => Math.sqrt(value).toFixed(1);
console.log(getRoot(square));
