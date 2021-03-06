/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество 
элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 
*/

/*
let h2 = document.getElementById("categories").querySelectorAll("h2");
let ul = document.getElementById("categories").querySelectorAll("ul");
// console.log(h2);
console.log(ul);

for (let i = 0; i < ul.length; i++) {
    console.log(`Категория: ${h2[i].textContent}\nКоличество элементов:${ul[i].querySelectorAll("li").length}`);
}
*/

  
const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(category => console.log(`Категория: ${category.querySelector('h2').textContent}
Количество элементов: ${category.querySelectorAll('li').length}`));
