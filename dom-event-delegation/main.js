var $task = document.querySelector('.task-list');
$task.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log(closest);
    closest.remove('.task-list-item');
  }
});
