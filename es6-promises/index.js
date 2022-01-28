const takeAChance = require('./take-a-chance');

const promiseA = takeAChance('Alex');
promiseA.then(data => {
  console.log(data);
});
promiseA.catch(error => {
  console.error(error);
});
