/*
33. Задание на МСМК: Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в
 правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
*/

let phrase = "Как однажды Жак звонарь сломал фонарь головой";
let phraseArray = phrase.split(" ");
let wordToMove = "головой";
let indexWordToMove = phraseArray.indexOf(wordToMove);
if(indexWordToMove>=0){
    phraseArray.splice(indexWordToMove,1);
    phraseArray.splice(phraseArray.length-2,0,wordToMove);
}
alert(phraseArray.join(" "));
