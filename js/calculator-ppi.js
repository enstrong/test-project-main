let buttonPpiCalc = document.querySelector('.button-ppi-calc');
	//  width = window.screen.width,
	//  height = window.screen.height,
	//  x = document.querySelector('.width').value = width,
	//  y = document.querySelector('.height').value = height;

buttonPpiCalc.addEventListener('click', function () {
	let inch = document.querySelector('.inch').value,
		 x = document.querySelector('.width').value,
		 y = document.querySelector('.height').value,
		 result = document.querySelector('.result-text-ppi'),
		 sqroot = +(x*x) + +(y*y);
   
   result.innerHTML = (Math.sqrt(sqroot) / inch).toFixed(2);
}) 