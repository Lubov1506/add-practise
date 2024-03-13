// 16. Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.Використовувати switch.

function getSeason() {
  const monthOrder = Number(document.getElementById('month-input').value);
  const res = document.getElementById('season-res');

  switch (monthOrder) {
    case 12:
    case 1:
    case 2:
      res.innerText = `${monthOrder} month it's Winter`;
      break;
    case 3:
    case 4:
    case 5:
      res.innerText = `${monthOrder} month it's Spring`;
      break;
    case 6:
    case 7:
    case 8:
      res.innerText = `${monthOrder} month it's Summer`;
      break;
    case 9:
    case 10:
    case 11:
      res.innerText = `${monthOrder} month it's Autumn`;
    default:
      res.innerText = 'Incorrect value';
  }
  document.getElementById('month-input').value = '';
}
// 17. Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.Використовувати switch.

function getQuantityDays() {
  const monthOrder = Number(document.getElementById('month-days-input').value);
  const resQuantityDays = document.getElementById('quantity-days-res');

  switch (monthOrder) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      resQuantityDays.innerText = `In ${monthOrder} month 31 days`;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      resQuantityDays.innerText = `In ${monthOrder} month 30 days`;
      break;
    case 2:
      resQuantityDays.innerText = `In ${monthOrder} month 28 days`;
      break;
    default:
      resQuantityDays.innerText = `Incorrectly value`;
  }
  document.getElementById('month-days-input').value = '';
}

// 18. Створити розмітку  з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" - "стоп", якщо "зелений" - "йти", якщо "жовтий" - "чекати". Використовувати switch.

function getColorRes() {
  const color = document.getElementById('input-color').value.toLowerCase();
  const colorRes = document.getElementById('color-res');

  switch (color) {
    case 'червоний':
      colorRes.innerText = 'стоп';
      break;
    case 'зелений':
      colorRes.innerText = 'йти';
      break;
    case 'жовтий':
      colorRes.innerText = 'чекати';
      break;
    default:
      colorRes.innerText = 'Немає такого кольору';
  }
  document.getElementById('input-color').value = '';
}

// 19. Створити розмітку  з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль. Використовувати switch.

function getCalcRes() {
  let firstNum = document.getElementById('input-number-first').value;
  let secondNum = document.getElementById('input-number-second').value;
  const operation = document.getElementById('calc-operation').value;
  const res = document.getElementById('calc-res');

  if (firstNum === '' && secondNum === '') {
    res.innerText = 'Введіть значення';
    return;
  } else if (firstNum === '') {
    res.innerText = 'Введіть перше значення';
    return;
  } else if (secondNum === '') {
    res.innerText = 'Введіть друге значення';
    return;
  }

  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  if (secondNum === 0 && operation === '/') {
    res.innerText = 'На 0 ділити не можна';
    return;
  }
  let result;
  switch (operation) {
    case '+':
      result = sum(firstNum, secondNum);
      break;
    case '-':
      result = sub(firstNum, secondNum);
      break;
    case '*':
      result = mult(firstNum, secondNum);
      break;
    case '/':
      result = div(firstNum, secondNum);
      break;
  }
  return (res.innerText = `Результат: ${result}`);
}

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
// 20. Створити скрипт, який виводить на екран всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
const start = 1;
const end = 50;
const max = 30;
for (let i = start; i <= end; i++) {
  if (i >= max) break;
  // console.log(i);
}

// 21. За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  // console.log(i);
  i++;
}
