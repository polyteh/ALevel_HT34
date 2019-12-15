//10. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
var number;
do {
  number = prompt("Enter number");
} while (isNaN(number));
alert("Square of " + number + " is " + Math.pow(number, 2));
