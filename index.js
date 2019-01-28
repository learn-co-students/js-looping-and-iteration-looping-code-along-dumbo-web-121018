// Code your solutions in this file
function printBadges(employees) {
for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees;
}

function tailsNeverFails () {
  // set tails to 0
  let tails = 0;
  // #create condition to create coin flip

  while (Math.random() >= 0.5) {

  // #itereate through loop adding 1 each time
    tails++;
  }
  // #tells user how many tail flips in a row
  return `You got ${tails} tails in a row!`;
}
