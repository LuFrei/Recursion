// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument.
// You can assume that the argument will be a positive integer. Use recursion.

// NOTE: After a certain amount of digits, the function breaks. I'm unsure if that's my code of Javascript breaking.

function sumDigits(num){
  let stringyNum = num.toString();

  if(stringyNum.length > 1){
    let digit = parseInt(stringyNum[0]);
    let leftOverNum = parseInt(stringyNum.slice(1));

    console.log(`digit: ${digit}\nleftOver: ${leftOverNum}`);
    sum = digit + sumDigits(leftOverNum);
    console.log(`adding digit ${digit} to sum:\n${sum}`);
    
    return sum;
  }
  if(stringyNum.length <= 1){
    return parseInt(stringyNum);
  }
}

sumDigits(1234) // => 10