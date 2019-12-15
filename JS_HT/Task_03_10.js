/*10. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
 */
let arrayOfvalues = [10, 20, 30, 50, 235, 3000];
let beginNum = [1, 2, 5];

for (const value of arrayOfvalues) {
  let startWith = Number(value.toString()[0]);
  for (const beginKey of beginNum) {
    if (beginKey === startWith) {
      console.log(value);
      break;
    }
  }
}

