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

let gameGuess = (gameAtt) => {
  let n = Math.floor(Math.random() * 11);
  let attempts = 0;
  let gotIt = false;
  return function game(x) {
    if (attempts === gameAtt) {
      console.log(`No more guesses the answer was ${n}! Please start a new game`);
      return;
    }
    else if (!gotIt) {
      if (x < n) {
        console.log("Your guess is too low!");
      } 
      else if (x > n) {
        console.log("Your guess is too high!");
      } 
      else {
        gotIt = true;
        console.log("You got it!");
      }
    } 
    else {
      console.log("You know the answer. What do you want from me?");
    }
    return attempts++;
  };
};
let myGame = gameGuess(5);
myGame(2);
myGame(4);
myGame(6);
myGame(8);
myGame(10);
myGame(1);
myGame(3);
myGame(5);
myGame(7);
myGame(9);
myGame(0);