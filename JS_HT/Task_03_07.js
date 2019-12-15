/*7. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
 */
let arrayOfvalues = [2, 5, 9, 15, 0, 4];
for (const value of arrayOfvalues) {
  if ((value > 3)&&(value<10)) {
    console.log(value);
  }
}
