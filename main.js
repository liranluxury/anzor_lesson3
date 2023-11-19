"use strict";
// 1) Перевернуть строку:

// Напишите функцию, которая принимает строку в качестве входных данных и возвращает перевернутую строку.
// Вход: "Hello"
// Ожидаемый результат: "olleH"
function turnStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(turnStr("Hello"));
// 2) Проверка на палиндром:
function isWordPalindrom(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  if (reverse !== str) return false;
  if (reverse === str) return true;
}
console.log(isWordPalindrom("raceecar"));
// Создайте функцию, которая проверяет, является ли заданное слово палиндромом.
// Вход: "racecar"
// Ожидаемый результат: true

// 3) Самое длинное слово:
function isLongerWord(str) {
  let arr = str.split(" ");
  let longer = "";
  arr.forEach((word) => {
    if (word.length > longer.length) {
      longer = word;
    }
  });
  return longer;
}
console.log(isLongerWord("This is a beautiful day"));

// Напишите функцию, которая находит самое длинное слово в предложении.
// Вход: "This is a beautiful day"
// Ожидаемый результат: "beautiful"
//************************************************* */
// Массивы:
// 4)
// Сумма элементов массива:

// Напишите функцию, которая вычисляет сумму элементов в массиве.
// Вход: [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5];
function sumArr(arr) {
  return arr.reduce((prev, item) => prev + item, 0);
}
console.log(sumArr(arr));

// Ожидаемый результат: 15

// 5) Поиск максимального элемента:

// Напишите функцию, которая находит максимальный элемент в массиве чисел.
function maxItem(arr) {
  return arr.reduce((prev, item) => {
    if (prev < item) {
      return item;
    }
    return prev;
  });
}
const arr1 = [10, 5, 8, 20, 15];
console.log(maxItem(arr1));
// Вход: [10, 5, 8, 20, 15]
// Ожидаемый результат: 20

// 6) Фильтрация положительных чисел:

// Напишите функцию, которая фильтрует положительные числа из массива.
function positiveNumber(arr) {
  let posArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posArr.push(arr[i]);
    }
  }
  return posArr;
}
const arrFull = [-2, 5, -8, 10, -3, 15];
console.log(positiveNumber(arrFull));
// Вход: [-2, 5, -8, 10, -3, 15]
// Ожидаемый результат: [5, 10, 15]

// 7) Фильтрация объектов:

// Создайте массив объектов, представляющих автомобили с полями "марка" и "год выпуска". Напишите функцию, которая возвращает массив автомобилей, выпущенных после 2010 года.
// Вход:  [{ brand: "Toyota", year: 2008 }, { brand: "Ford", year: 2015 }, { brand: "Honda", year: 2012 }]
// Ожидаемый результат: [{ brand: "Ford", year: 2015 }, { brand: "Honda", year: 2012 }]
const arrCars = [
  { brand: "Toyota", year: 2008 },
  { brand: "Ford", year: 2015 },
  { brand: "Honda", year: 2012 },
];

function cars2010(arr) {
  const newArrCars = [];
  arr.forEach((item) => {
    if (item.year > 2010) {
      newArrCars.push(item);
    }
  });
  return newArrCars;
}
console.log(cars2010(arrCars));

// 8) Объединение объектов:

// Напишите функцию, которая объединяет два объекта в один.
// Вход: { { name: "Alice", age: 25 }, { city: "New York" }
// Expected Output: { name: "Alice", age: 25, city: "New York" }
const nameA = { name: "Alice", age: 25 };
const city = { city: "New York" };
function fullName(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(fullName(nameA, city));

// 9) Увеличение шрифта:
// Создайте несколько абзацев текста (<p>).
// Напишите функцию, которая при каждом клике на абзаце увеличивает его размер шрифта.
// Вход: Несколько элементов <p>.
const textBlocks = document.querySelectorAll(".text");
function largestText(arr) {
  arr.forEach((item) => {
    item.addEventListener("click", function () {
      let currentFontSize = parseInt(window.getComputedStyle(item).fontSize);
      item.style.fontSize = currentFontSize + 2 + "px";
    });
  });
} //а если при достижении например 26 пикселей мы хотим при каждом клике уменьшать до 16 пикселей  - надо другую функцию писать или можно здесь же?
largestText(textBlocks);

/* 10)
Добавление границы при фокусе:
Создайте поле ввода (<input>).
Напишите функцию, которая добавляет границу полю ввода при получении им фокуса, и убирает границу при потере фокуса.
Вход: Поле ввода. */
const inputField = document.getElementById("inputOne");
function borderInput(item) {
  let currentBorder = window.getComputedStyle(item).border;

  item.addEventListener("mouseenter", function () {
    item.style.border = "1px solid #b9ed4d";
  });
  item.addEventListener("mouseleave", function () {
    item.style.border = currentBorder;
  });
}
borderInput(inputField);

/* 11)
Динамическое добавление полей:
Создайте форму с кнопкой "Добавить поле".
Напишите функцию, которая при клике на кнопке добавляет новое поле ввода.
Вход: HTML-форма и кнопка. */
const addBtn = document.getElementById("add_btn");
const parentFields = document.querySelector(".wrapper_fields");
const field = document.querySelector(".field");
function addElement(item) {
  item.addEventListener("click", function () {
    const newField = document.createElement("input");
    newField.classList.add("field");
    parentFields.appendChild(newField);
  });
} //как сделать чтобы больше не добавлялось если кончился блок?
addElement(addBtn);

/* 12)Автозаполнение поля:
Создайте поле ввода (например, для города).
Напишите функцию, которая автоматически предлагает варианты автозаполнения при вводе.
Вход: Поле ввода. */

/* 13)
Изменение цвета поля:
Создайте форму с несколькими полями ввода.
Напишите функцию, которая при вводе в поле меняет его цвет в зависимости от введенного текста.
Вход: Несколько полей ввода. */

/* Работа с DOM и событиями:
14) Создание списка:
Напишите функцию, которая создает список (например, <ul>) на основе массива данных.
Вход: Массив данных.
Ожидаемый результат: Динамически созданный список. */

/* 15) Изменение стилей с помощью классов:
Создайте элемент (например, <div>).
Напишите функцию, которая при клике на элементе добавляет или удаляет определенный класс для изменения стилей.
Вход: Элемент <div>. */

/* 
16) Ограничение символов в поле ввода:
Создайте поле ввода с ограничением на количество введенных символов.
Напишите функцию, которая отображает текущее количество символов и предотвращает ввод, когда лимит достигнут.
Вход: Поле ввода и лимит символов. */

/* 17) Динамическое отображение пароля:
Создайте поле ввода для пароля с кнопкой, которая переключает видимость пароля.
Напишите функцию, которая изменяет тип поля ввода с "password" на "text" и наоборот при клике на кнопку.
Вход: Поле ввода для пароля и кнопка. */

/* 18)Извлечение подстроки:

Описание задачи: Создайте функцию, которая принимает строку и возвращает подстроку из середины строки.
Input: ("JavaScript")
Ожидаемый вывод: "Script" */

/* 
19) Преобразование регистра:

Описание задачи: Создайте функцию, которая принимает строку и возвращает новую строку, где все символы будут в верхнем регистре, а затем в нижнем регистре.

Input: ("Random CaSeS")
Ожидаемый вывод: "RANDOM CASES", "random cases" */
function uppeString(str) {
  return str.toUpperCase();
}
function lowerString(str) {
  return str.toLowerCase();
}
console.log(uppeString("Random CaSeS"));
console.log(lowerString("Random CaSeS"));

/* 20) 
Удаление пробелов:

Описание задачи: Создайте функцию, которая принимает строку и удаляет все пробелы из неё.
Input: (" Hello World ")
Ожидаемый вывод: "HelloWorld" */
function fullStr(str) {
  return str.replace(/ /g, "");
}
console.log(fullStr(" Hello World "));
/* 
21) Замена подстроки:

Описание задачи: Создайте функцию, которая принимает строку и две подстроки. Замените все вхождения первой подстроки на вторую.
Input: ("Hello World", "World", "Universe")
Ожидаемый вывод: "Hello Universe" */
function changeStr(str, pdstr) {
  let arr = str.split(" ");
  let newStr = arr[0] + " " + pdstr;
  return newStr;
}
console.log(changeStr("Hello World", "Universe"));

/* 21) 
Поиск подстроки:

Описание задачи: Создайте функцию, которая принимает строку и подстроку, а затем возвращает индекс первого вхождения подстроки в строку.
Input: ("JavaScript is fun", "is")
Ожидаемый вывод: 4 */
function findStr(str, pdstr) {
  let arr = str.split(" ");
  let newArr = [];
  arr.forEach((item, index) => {
    if (item === pdstr) {
      newArr.push(index);
    }
  });
  return newArr;
}
console.log(findStr("JavaScript is fun", "is"));
