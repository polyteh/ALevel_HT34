/*07. Напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:
Happy birthday dear {{username}}
Например Happy birthday dear Maxim
*/
var personName = prompt("Please enter your name");
if (personName != "") {
  console.log("Happy birthday dear " + personName);
} else {
  console.log("Happy birthday dear Anonymus");
}
