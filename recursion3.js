// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array.
// Use recursion. Don’t mutate the original array.

function reverseArray(arr){
  let arrCopy = [...arr];
  let procVal = arrCopy.pop();
  let newArr = []

  if(arr.length > 0){
    newArr = reverseArray(arrCopy);
    newArr.unshift(procVal);
  }
  return newArr;
}

let arr = [1,2,3,4];
let reversedArr = reverseArray(arr);

console.log(reversedArr) // [4,3,2,1]
console.log(arr) // [1,2,3,4]