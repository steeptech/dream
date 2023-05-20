//Скрипт, що відповідає за модальне вікно

//Пошук елементів модального вікна на сторінці html
 const modal = document.querySelector('.modal'); 
 const modalCloseBtn = document.querySelector('[data-close]');
 let modalText= document.getElementById('modalText');
 let send= document.getElementById('send');

 //Обробник події при натискані кнопки "Відправити анкету."
 send.addEventListener('click', function(){    

    modal.classList.add('show');
    modal.classList.remove('hide'); 
    document.body.style.overflow = 'hidden';
    modalText.append('Анкета відправлена. Ми зв’яжемося з Вами найближчим часом');
    send.disabled = true;
    event.preventDefault();  
 },false);       
   
//Обробник події при натискані кнопки "Відправити анкету."
 function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    location.href = 'vacancies.html';
 };

 //Обробник події при натискані на "закрити модальне вікно".
 modalCloseBtn.addEventListener('click', closeModal);

//Обробник події при натискані на екран, при появі модального вікна "
 modal.addEventListener('click', (e) => {
    if (e.target === modal) {
       closeModal()
    }
 });
//Обробник події при натискані кнопки "Escape"
 document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
       closeModal()
    }
 })