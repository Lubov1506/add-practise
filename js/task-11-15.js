// 11. Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
const intNum = 15;
const strNum = '15px';
// console.log(Number.parseInt(strNum));
// console.log(intNum.toString());

// 12. Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні - "Текст не містить слово JavaScript".

function checkUserInput() {
  const userText = document.getElementById('user-input').value;
  const paragrInfo = document.getElementById('res');
  if (userText.toLowerCase().includes('javascript')) {
    paragrInfo.innerText = 'Текст містить слово JavaScript';
  } else {
    paragrInfo.innerText = 'Текст не містить слово JavaScript';
  }
}
// 13. Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні - "Число не входить в діапазон від 10 до 20".

function checkNumInput() {
  const numInput = Number(document.getElementById('num-input').value);
  const res = document.getElementById('num-check-res');
  res.innerText =
    numInput > 10 && numInput < 20
      ? `Число ${numInput} входить в діапазон від 10 до 20`
      : `Число ${numInput} не входить в діапазон від 10 до 20`;
  document.getElementById('num-input').value = '';
}

// 14. Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні - виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

function checkUserInfo() {
  const userName = document.getElementById('user-name-input').value;
  const userEmail = document.getElementById('user-email-input').value;
  const userPassword = document.getElementById('user-password-input').value;

  const res = document.getElementById('check-info-res');
  res.innerText =
    checkName(userName) && checkEmail(userEmail) && checkPassword(userPassword)
      ? 'Check is done!'
      : 'Check is failed';
  document.getElementById('user-name-input').value = '';
  document.getElementById('user-email-input').value = '';
  document.getElementById('user-password-input').value = '';
}
function checkName(name) {
  return name.length > 3;
}
function checkEmail(email) {
  return email.includes('@.') && email[email.length - 1] !== '.';
}
function checkPassword(password) {
  return password.length >= 6;
}
// 15. Створити розмітку  з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний. Використовувати switch.

function checkDayOfWeek() {
  const inputDay = document
    .getElementById('user-day-input')
    .value.toLowerCase();
  const res = document.getElementById('check-day-res');
  switch (inputDay) {
    case 'понеділок':
    case 'вівторок':
    case 'середа':
    case 'четвер':
    case "п'ятниця":
      res.innerText = `${inputDay} - робочий день`;
      break;
    case 'субота':
    case 'неділя':
      res.innerText = `${inputDay} - вихідний день`;
      break;
    default:
      res.innerText = 'Неправильно введена назва дня';
  }
  document.getElementById('user-day-input').value = '';
}
