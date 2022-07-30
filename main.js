//Task No1

let replicate = (number, times) => {
  if (times <= 0) {
    return [];
  } else {
    return [number].concat(replicate(number, times - 1));
  }
};
console.log(replicate(5, 3)); // [5, 5, 5]
console.log(replicate(69, 1)); // [69]
console.log(replicate(6, -2)); // []

//Task No2

let specialMultiply = (payload1, payload2) => {
  if (!!payload2) {
    return payload1 * payload2;
  }
  return function (pay2) {
    return payload1 * pay2;
  };
};
console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // f

//Task No3

function game() {
  let n = Math.floor(Math.random() * 11);
  let attempts = 5;
  let gotIt = false;
  while (true) {
    let x = +prompt("Enter your guess (0 to 10):");
    if (attempts == 0) {
      alert(`No more guesses the answer was ${n}! Please start a new game`);
      return;
    }
    attempts--;
    if (!gotIt) {
      if (isNaN(x) || x < 0 || x > 10) {
        alert("Not correct entry!");
        break;
      } else if (x < n) {
        alert("Your guess is too low!");
      } else if (x > n) {
        alert("Your guess is too high!");
      } else {
        gotIt = true;
        alert("You got it!");
      }
    } 
    else {
      alert("You know the answer. What do you want from me?");
    }
  };
};