// Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.
var str;
for (var i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    str += ".";
  } else {
    str += "#";
  }
}
console.log(str);
