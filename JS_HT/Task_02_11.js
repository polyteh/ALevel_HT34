/*
Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
Спрашиваем у пользователя через prompt число.
Если пользователь ввёл 10h, то мы выводим ему количество секунд за 10 часов.
Если пользователь ввёл 10d, то мы выводим ему количество секунд за 10 дней.
Если пользователь ввёл 10w, то мы выводим ему количество секунд за 10 недел.
Если пользователь ввёл 10m, то мы выводим ему количество секунд за 10 месяц.
*/
input = prompt("Input string to calculate");
let timeModifier = input.charAt(input.length - 1);
let numberOfUnints = input.slice(0, input.length - 1);
if (isNaN(numberOfUnints)||(Number(numberOfUnints)<0)) {
  alert("Wrong input format");
} else {
  switch (timeModifier) {
    case "h":
      alert("Seconds in hour " + numberOfUnints * 3600);
      break;
    case "d":
      alert("Seconds in days " + numberOfUnints * 3600 * 24);
      break;
    case "w":
      alert("Seconds in weeks " + numberOfUnints * 3600 * 24 * 7);
      break;
    case "m":
      alert("Seconds in months " + numberOfUnints * 3600 * 24 * 7 * 30);
      break;
    default:
      console.log("Cant find modifier");
  }
}
