//28. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
let mixedArray = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
let sumOfNumb = calcSumNumbers(mixedArray);
alert("Sum of numbers: " + sumOfNumb);

function calcSumNumbers(arrayToWork) {
  let sum = 0;
  for (let i = 0; i < arrayToWork.length; i++) {
    if (!isNaN(arrayToWork[i])) {
      sum += Number(arrayToWork[i]);
      console.log(arrayToWork[i]);
    }
  }
  return sum;
}
