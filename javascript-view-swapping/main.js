var $tabcontainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabcontainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      var check = $tab[i];
      if (check === event.target) {
        check.className = 'tab active';
      } else {
        check.className = 'tab';
      }
    }
  }

  var data = event.target.getAttribute('data-view');
  for (var t = 0; t < $view.length; t++) {
    var view = $view[t].getAttribute('data-view');
    if (view !== data) {
      $view[t].className = 'view hidden';
    } else {
      $view[t].className = ' view';
    }
  }
});
