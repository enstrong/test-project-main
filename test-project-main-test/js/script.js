// BURGER
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

// TABS
let tabsHeader = document.querySelector('.tabs-header'),
   tabsHeaderItem = document.getElementsByClassName('tabs-header-item'),
   tabsBodyItem = document.getElementsByClassName('tabs-body-item');

tabsHeader.addEventListener('click', function (event) {
   if (event.target.className == 'tabs-header-item') {
      let dataTab = event.target.getAttribute('data-tab');
   
      for (let i = 0; i < tabsHeaderItem.length; i++) {
         tabsHeaderItem[i].classList.remove('active');
      }
      event.target.classList.add('active');
      
      for (let i = 0; i < tabsBodyItem.length; i++) {
         if (dataTab == i) {
            tabsBodyItem[i].style.display = 'block';
         } else {
            tabsBodyItem[i].style.display = 'none';
         }
      }
   }
})

// RANDOMIZER
const buttonRandomizer = document.querySelector('.button-randomizer'),
      randomNumber = document.querySelector('.result-text-randomizer'),
      inputFrom = document.querySelector('.input-from'),
      inputTo = document.querySelector('.input-to');

function getRandomElement(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

buttonRandomizer.addEventListener('click', function () {
   let randomElement = getRandomElement(inputFrom.value, inputTo.value);
   smoothly(randomNumber, 'textContent', randomElement)
});

// CALCULATOR PPI
let buttonPpiCalc = document.querySelector('.button-ppi-calc');

buttonPpiCalc.addEventListener('click', function () {
	let inch = document.querySelector('.inch').value,
		 x = document.querySelector('.width').value,
		 y = document.querySelector('.height').value,
		 result = document.querySelector('.result-text-ppi'),
		 sqroot = +(x*x) + +(y*y);
   
   result.innerHTML = (Math.sqrt(sqroot) / inch).toFixed(2);
}) 