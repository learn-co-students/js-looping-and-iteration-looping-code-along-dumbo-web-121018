// Code your solutions in this file
let printBadges = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

let tailsNeverFails = () => {
  let tails = true;
  let counter = -1;
  while (tails === true) {
    counter++;
    tails = Math.random() >= 0.5;
  }
  return `You got ${counter} tails in a row!`;
}
