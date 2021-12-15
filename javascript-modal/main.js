var clicked = 0;
var $open = document.querySelector('.open');
var $hidden = document.querySelector('.hidden');
var $no = document.querySelector('.no');

$open.addEventListener('click', function () {
  clicked += 1;
  if (clicked % 2) {
    $hidden.className = 'hidden off';
  }
});

$no.addEventListener('click', function () {
  clicked += 1;
  if (clicked % 2 === 0) {
    $hidden.className = 'hidden on';
  }
});
