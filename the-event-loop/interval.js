let count = 3;

const interval = setInterval(function () {
  for (let i = count; i >= 0; i--) {
    if (count === 3) {
      console.log(count);
      count -= 1;
    } else if (count === 2) {
      console.log(count);
      count -= 1;
    } else if (count === 1) {
      console.log(count);
      count -= 1;
    } else {
      console.log('Blast off!');
      clearInterval(interval);
    }
  }
}, 1000);
