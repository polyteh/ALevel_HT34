/*8. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
 */
let arrayOfvalues = [2, -5, 9, -15, 0, 4, -3, 5, 12, 5, -5];
let sumOfPositiveNum=0;
for (const value of arrayOfvalues) {
  if (value > 0) {
    sumOfPositiveNum+=value;
  }
}
console.log(sumOfPositiveNum);
