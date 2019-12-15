//8. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите сумму всех charCode этой переменной
let str="Привет, Мир!";
let sumCharCode=0;
for (let i = 0; i < str.length; i++) {
sumCharCode+= str.charCodeAt(i);
  console.log( str.charCodeAt(i));
}
alert("Your sum of char codes: " + sumCharCode);
