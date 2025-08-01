// *************************************************
/* COLLATZ CONJECTURE

The Collatz conjecture in mathematics asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.

It works like this:

- Start with any positive number
- If the number is odd, multiply it by 3 and add 1
- If the number is even, divide it by 2
- Repeat the above process on the resulting number

The Collatz conjecture has shown that any positive number
will eventually reach 1, which will result in a loop where
no further progress can be made

Use Javascript to test the Collatz conjecture:

Write a function that takes in a number, and run the collatz operation on every number from 1 to the number received as a parameter.

Include code that finds which number took the most amount of steps to reach 1, and how many steps it took.

Include code that finds which number that reached the highest number in its sequence, and what that peak value was.

Output the following console.log from your function:

“Running the Collatz procedure on all numbers from 1 to (number received):”

“The integer with most steps was (number), with (number of steps) total steps”

“The integer with the highest peak was (number), with a peak of (highest peak value)” */
// ***********************************************
//
// const resultArray = [];
const maxResultArray = [];
const collatzConjecture = (num) => {
  for (let i = num; i > 0; i--) {
    let result = i;
    let steps = 1;
    let maxSteps = 1;
    let peak = 1;

    while (result > 1) {
      steps++;
      // if (result === 1) break;
      if (result % 2 !== 0) {
        result = result * 3 + 1;
      } else {
        result = result / 2;
      }

      if (result > peak) {
        peak = result;
      }
      if (result === 1) {
        maxSteps = steps;
      }
      // console.log(i, steps, result);
      // resultArray.push([i, steps, result]);
    }
    maxResultArray.push([i, maxSteps, peak]);
  }
  let finalSteps = 0;
  let highestPeak = 0;
  let integerSteps = 0;
  let integerPeak = 0;
  for (let j = 0; j < maxResultArray.length; j++) {
    if (maxResultArray[j][2] > highestPeak) {
      highestPeak = maxResultArray[j][2];
      integerPeak = maxResultArray[j][0];
      // console.log(`number: ${integerPeak} has ${highestPeak} peak`);
    }
    if (maxResultArray[j][1] > finalSteps) {
      finalSteps = maxResultArray[j][1];
      integerSteps = maxResultArray[j][0];
      // console.log(`number: ${integerSteps} took ${finalSteps} steps`);
    }
  }
  return `Running the Collatz procedure on all numbers from 1 to ${num}:\n
The integer with most steps was ${integerSteps}, with ${finalSteps} total steps\n
The integer with the highest peak was ${integerPeak}, with a peak of ${highestPeak}`;
};
// collatzConjecture(3);
console.log(collatzConjecture(1000));
// console.log(resultArray);
// console.log(maxResultArray);
// console.log(maxResultArray.length);
