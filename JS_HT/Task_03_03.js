/*2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. Через for of
 */
let arrayOfValues = [1, 2, 3, 4, 5];
let multiplyResult = 1;
for (let element of arrayOfValues) {
  multiplyResult *= element;
}
console.log(multiplyResult);
