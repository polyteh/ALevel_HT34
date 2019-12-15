//25. Напишите функция, которая принимает аргументом строку и возврашает нам строку преобразуя первую букву строки в верхний регистр.

let str = prompt("enter string");
let newStr = firstCharToUpper(str);
alert("Initial: " + str + ", updated: " + newStr);

function firstCharToUpper(stringToWork) {
  let updStr = stringToWork.charAt(0).toUpperCase() + stringToWork.slice(1);
  return updStr;
}
