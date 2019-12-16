/*
32. Задание на МС.  Напишите объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). 
*/
//define object
let phone = {
  brand: "",
  model: "",
  resolution: "",
  color: ""
};
for (let prop in phone) {
  phone[prop] = prompt("Enter " + prop);
}
