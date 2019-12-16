/*
30. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
 a. Добавьте в начало массива значение ‘Backbone.js’
 b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
 c. Добавьте в массив значение ‘CommonJS’ вторым элементом
 d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
 z.  Сделайте массив и назовите dlyaLyudshix, перебирает массив, где только удалили ‘jQuery’, и перебирайте этот массив и если вы найдёте там значние ‘Vue.js’, 
 то положите в массив с названием dlyaLyudshix
 */

//add elements
let customArray = ["AngularJS", "jQuery"];
customArray.unshift("Backbone.js");
customArray.push("ReactJS", "Vue.js");
customArray.splice(1, 0, "CommonJS");
//delete elements
let itetToDelete = "jQuery";
let indexOfElement = customArray.indexOf(itetToDelete);
if (indexOfElement >= 0) {
  customArray.splice(indexOfElement, 1);
  alert(itetToDelete + " - Это здесь лишнее");
} else {
  alert("Лишних нет");
}
//find and copy to other array
let dlyaLyudshix = [];
let itemDlyaLyudshix = "Vue.js";
let indexDlyaLyudshix = customArray.indexOf(itemDlyaLyudshix);
if (indexDlyaLyudshix >= 0) {
  dlyaLyudshix.push(customArray[indexDlyaLyudshix]);
}
