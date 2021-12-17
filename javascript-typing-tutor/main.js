var keys = 0;
var $letter = document.querySelectorAll('span');
var $color = document.querySelector('.color');

document.addEventListener('keydown', function (event) {

  if (event.key !== $letter[keys].textContent) {
    $color.className = 'color wrong';

  } else {
    $color.className = 'color correct';
    keys++;
    $color = $color.nextElementSibling;
  }

});
