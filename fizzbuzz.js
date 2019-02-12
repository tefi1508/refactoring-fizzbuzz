isFizz = function (n) {
  if(n % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

isBuzz = function (n) {
  if(n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

isFizzBuzz = function (n) {
  if(n % 3 === 0 && n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

fizzbuzz = function () {
  for(i = 1; i <= 100; i++) 
  {
      text = i;
      if(isFizzBuzz(i)) {
        text = "FizzBuzz"
      } else {
        if(isFizz(i)) {
          text = "Fizz";
        }
        if(isBuzz(i)) {
          text = "Buzz"
        }
      }
      console.log(text);
  }
}

fizzbuzz()