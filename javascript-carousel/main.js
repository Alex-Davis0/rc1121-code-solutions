var $currentPokemon = document.querySelector('.pokemon');
var $dot = document.getElementsByClassName('dot');
var $dotsContainer = document.querySelector('.dot-container');

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var count = 0;

var ID = null;

function carousel() {
  count++;
  if (count > images.length - 1) {
    count = 0;
  }
  $currentPokemon.src = images[count];
  $dot[count].classList.remove('far');
  $dot[count].classList.add('fas');
  for (var curIcon of $dot) {
    if (curIcon !== $dot[count]) {
      curIcon.classList.remove('fas');
      curIcon.classList.add('far');
    }
  }
}

ID = setInterval(carousel, 3000);

var $backButton = document.querySelector('.button-back');

function previousImg(event) {
  clearInterval(ID);
  if (count >= 0) {
    count -= 1;
  }
  if (count < 0) {
    count = images.length - 1;
  }
  $currentPokemon.src = images[count];
  $dot[count].classList.add('fas');
  $dot[count].classList.remove('far');
  for (var icon of $dot) {
    if (icon !== $dot[count]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  ID = setInterval(carousel, 3000);
}

$backButton.addEventListener('click', previousImg);

var $nextButton = document.querySelector('.button-next');

function nextImg(event) {
  clearInterval(ID);
  if (count <= images.length - 1) {
    count += 1;
  }
  if (count > images.length - 1) {
    count = 0;
  }
  $currentPokemon.src = images[count];
  $dot[count].classList.add('fas');
  $dot[count].classList.remove('far');
  for (var icon of $dot) {
    if (icon !== $dot[count]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }

  ID = setInterval(carousel, 3000);
}

$nextButton.addEventListener('click', nextImg);

function navigateImgs(event) {
  clearInterval(ID);
  if (event.target.tagName !== 'I') {
    return;
  }
  var $navButton = event.target.closest('.dot');
  count = +$navButton.id;
  $currentPokemon.src = images[count];
  $dot[count].classList.add('fas');
  $dot[count].classList.remove('far');
  for (var icon of $dot) {
    if (icon !== $dot[count]) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  }
  ID = setInterval(carousel, 3000);
}

$dotsContainer.addEventListener('click', navigateImgs);
