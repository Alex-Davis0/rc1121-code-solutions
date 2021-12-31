var $user = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);

  xhr.response.forEach(function (elment) {
    var li = document.createElement('li');
    li.textContent = elment.name;
    $user.appendChild(li);
  });
});

xhr.send();
