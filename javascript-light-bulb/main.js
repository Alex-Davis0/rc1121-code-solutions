var clicked = 0;

var $button = document.querySelector('button');
var $back = document.querySelector('.back');

$button.addEventListener('click', function () {
  clicked += 1;
  if (clicked % 2 === 0) {
    $button.className = 'button off';
    $back.className = 'back off';
  } else {
    $button.className = 'button on';
    $back.className = 'back on';
  }
});
