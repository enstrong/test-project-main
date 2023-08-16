document.addEventListener('DOMContentLoaded', function () {
   let burger = document.querySelector('.burger'),
       nav = document.querySelector('.main-header-nav'),
       body = document.querySelector('.body');
   burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      nav.classList.toggle('open');
      body.classList.toggle('lock');
   });
});