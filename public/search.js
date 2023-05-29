//Скрипт, що відповідає за пошук

//Пошук кнопки "Знайти" та вікна для прізвища на сторінці html
let btn = document.getElementById('searh');
let inputWorkers = document.querySelector('.lastname');
//Масив з прізвищами
let arrName = [
   'Марко Поло',
   'Христофор Колумб',
   'Васко да Гама',
   'Лівінгстон Давид',
   'Кук Джеймс',
];
//Масив з посиланнями на сторінки людей
let arrSrc = [
   '../workers/Marco Polo.html',
   '../workers/Cristoforo Colombo.html',
   '../workers/Vasco da Gama.html',
   '../workers/David Livingstone.html',
   '../workers/James Cook.html',
];
//Обробник події при натискані на "Знайти".
btn.addEventListener('click', function () {
   console.log(inputWorkers.value)
   arrName.forEach((item, index) => {
      if (item == inputWorkers.value) {
         location.href = arrSrc[index];
      }
   });
   event.preventDefault();
}, false);



