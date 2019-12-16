/*
31. Задание на МС.  Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
 полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат
*/
//add elements
let numberOfInputs = 2;
let arrayToWork = [];
for (let i = 0; i < numberOfInputs; i++) {
  arrayToWork.push(prompt("Enter value " + i + " from " + numberOfInputs));
}
//calculate
let sumOfNumbers = 0;
for (let i = 0; i < arrayToWork.length; i++) {
  if (!isNaN(arrayToWork[i])) {
    sumOfNumbers += Number(arrayToWork[i]);
  }
}
alert("Sum of elements " + sumOfNumbers);
