// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.


let vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str){
  let char = str[str.length-1];
  let count = 0;

  if(str.length > 1){
    count = countVowels(str.slice(0, -1));
  }
  if(vowels.includes(char)){
    count++;
  }
  return count;
}

countVowels('Four score and seven years'); // => 9