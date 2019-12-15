/*5. Выведите столбец четных чисел в промежутке от 0 до 100. через while
 */
let maxValue = 100;
let counter = 0;
while (counter <= 100) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}
