
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log(event.target);
}

var $button = document.querySelector('.click-button');

$button.addEventListener('click', handleClick, true);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');

$hover.addEventListener('mouseover', handleMouseover, true);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log(event.target);
}

var $dblClick = document.querySelector('.double-click-button');

$dblClick.addEventListener('dblclick', handleDoubleClick, true);
