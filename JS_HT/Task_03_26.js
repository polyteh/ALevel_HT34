//26. Напишите функция, которая принимает аргументом строку и возврашает нам строку преобразуя последнюю букву строки в верхний регистр.
let str = prompt("enter string");
let newStr = lastCharToUpper(str);
alert("Initial: " + str + ", updated: " + newStr);

function lastCharToUpper(stringToWork) {
  let updStr =
    stringToWork.slice(0, stringToWork.length - 1) +
    stringToWork.charAt(stringToWork.length - 1).toUpperCase();
  return updStr;
}
