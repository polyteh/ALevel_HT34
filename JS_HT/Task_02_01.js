/*
1. Напишите код вычисления суммы всех нечетных чисел от 0 до заданного числа N
- Спрашиваем у пользователя через prompt
- Переводим в number(потому что из prompt мы получаем строку)
- Дальше думаем сами
В конце просто я должен увидеть сумму от 0 до N числа, который я ввёл
*/
var number = prompt("Enter N");
if (isNaN(number)||(Number(number)<0)) {
  console.log("It is not a number/negative number");
} else {
  var sum = 0;
  for (let i = 1; i <= Number(number); i++) {
    if (i % 2 != 0) {
      sum +=i;
    }
  }
  console.log(sum);
}
