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