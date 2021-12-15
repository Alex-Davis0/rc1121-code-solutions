var $contact = document.querySelector('#contact-form');

$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var $inputs = document.getElementById('contact-form').elements;
  var values = {};
  for (var i = 0; i < $inputs.length; i++) {
    if ($inputs[i].id) {
      values[$inputs[i].id] = $inputs[i].value;
    }
  }
  console.log('message data:', values);
  document.getElementById('contact-form').reset();
});
