// Напишіть скрипт, який знаходить обсяг циліндра висотою 10м і діаметром основи 4м , результат та дані повинні зберігатися в змінних.
const heightCylinder = 10;
const diameterCylinder = 4;

const getCylinderArea = (height, diameter) => {
  const radius = diameter / 2; // можна і не робити додаткову змінну radius
  const area = Math.PI * Math.pow(radius, 2) * height;
  return `Об'єм циліндра з висотою ${height}м та діаметром ${diameter}м складає ${area.toFixed(
    2
  )}м3`;
};
const cylArea = getCylinderArea(heightCylinder, diameterCylinder);
console.log(cylArea);

// У прямокутного трикутника дві сторони зі значенням 3 і 4. Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **). Результат та дані повинні зберігатися в змінних.

const sideA = 6;
const sideB = 5;
const getSizeGipotenuza = (sideA, sideB) => {
  const gipotenuza = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  return `Гіпотенуза трикутника з катетами ${sideA} та ${sideB} складає ${gipotenuza.toFixed(
    1
  )}`;
};
const sideC = getSizeGipotenuza(sideA, sideB);
console.log(sideC);

// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

const degreeCelc = 1;
function convertCelcToFareng(degreeCelc) {
  const degreeFareng = (degreeCelc * 9) / 5 + 32;
  return `${degreeCelc} градусів за Цельсієм відповідає температурі ${degreeFareng} градусів за шакалоюю Фаренгейта`;
}
const degreeFareng = convertCelcToFareng(degreeCelc);
console.log(degreeFareng);

// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

const daysMonth = 29;

const getHours = days => days * 24;
const getMinutes = days => days * 24 * 60;

const getInfoMonth = days => {
  const hours = getHours(days);
  const minutes = getMinutes(days);
  return `Місяць, в якому ${days} днів має ${hours} годин, що дорівнює ${minutes} хвилин`;
};
const monthInfo = getInfoMonth(daysMonth);
console.log(monthInfo);

// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

let playerHealth = 100;
let playerEnergy = 80;

const step = 20;

console.log(playerHealth, playerEnergy);
playerHealth -= step;
playerEnergy -= step;
console.log(playerHealth, playerEnergy);
