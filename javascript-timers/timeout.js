
function hello() {
  var message = document.querySelector('.message');
  message.textContent = 'Hello There';
}
setTimeout(hello, 2.0 * 1000);
