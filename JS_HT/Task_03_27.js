//27. Напишите функция, которая принимает аргументом строку и преобразуйте например 'var_test_text' в
//'varTestText'. Функция, конечно же, должен работать с любыми аналогичными строками.
let str = "var_test_text";
let replaceChar = "_";
let newStr = convertString(str, replaceChar);
alert("Initial: " + str + ", updated: " + newStr);

function convertString(stringToWork, charToReplace) {
  let wordArray = stringToWork.split(charToReplace);
  for (let i = 1; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
  }

  let updStr = wordArray.join("");

  return updStr;
}
