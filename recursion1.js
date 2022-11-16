// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

function sumNums(num) {
  if(num <= 1){
    return num;
  }
  return num + sumNums(num-1)
}

sumNums(3); // => 6 (3 + 2 + 1)


//broswer copy & paste Ver. (console.logs)
function sumNums(num) {
  console.log(`num: ${num}`);
  if(num <= 1){
    console.log(`num: ${num}`);
    return num;
  }
  if(num > 1){
    let sum = num + sumNums(num-1)
    console.log(`num: ${num}`);
    console.log(`sumNums sum: ${sum}`);
    return sum;
  }
}

console.log(`result: ${sumNums(3)}`);