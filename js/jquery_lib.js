// Документация http://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0
// Подключение CDN https://cdnjs.com/ или npm i jquery --save 

//import $ from 'jquery';

// Ждем, когда документ полностью готов $( document ).ready(function() теперь просто $(function())
$(function() {
    // При наведении на первый элемент, делаем его активным.
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    //Скрываем четную картику при нажатии на кнокупку 3.
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    // Прописываем анимацию вручную. Делаем анимацию для нечетной картики при нажатии на кнокупку 5.
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    }); 
});