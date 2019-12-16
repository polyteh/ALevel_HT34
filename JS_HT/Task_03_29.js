//29. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
//Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().
let randomArray = [];
let randomArraySize = 4;
let arrayPower = [];
let powerToCalc = 5;

//generate array
for (let i = 0; i < randomArraySize; i++) {
  randomArray.push((Math.random() * 10).toFixed(2));
}

for (let i = 0; i < randomArray.length; i++) {
  let itemPow = 1;
  for (let pow = 0; pow < powerToCalc; pow++) {
    itemPow *= randomArray[i];
  }
  arrayPower.push(itemPow.toFixed(2));
}

