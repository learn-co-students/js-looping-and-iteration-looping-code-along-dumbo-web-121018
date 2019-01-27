// Code your solutions in this file

function printBadges(employeesName) {
  for (let i = 0; i < employeesName.length; i++) {
    console.log(`Welcome ${employeesName[i]}! You are employee #${i + 1}.`);
  }
  return employeesName;
}

function tailsNeverFails() {
  let t = 0;
  while (Math.random() >= 0.5) {
    t++
  }

  return `You got ${t} tails in a row!`
}
