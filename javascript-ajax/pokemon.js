function getPokemonData(name) {
  var xhr = new XMLHttpRequest(); // used to create a new XHR object
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name); // used to set the request method and URL
  xhr.responseType = 'json'; // used to automatically parse the JSON respone body into JavaScript objects
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  }); // used to execute a function when the response is eventually loaded
  xhr.send(); // used to actually send the request to the server at the URL specified in xhr.open()
}
// xhrstatus is used to read the HTTP status code of the response message
// xhr.response is used to get the body of the HTTP response once it has been converted from a JSON string to JavaScript objects
getPokemonData('cubone');
