// A palindrome is a word that is spelled the same forwards and backwards.
// For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.
// Write a recursive function, isPalindrome, to check if a string is a palindrome.
// Return true if the string is a palindrome; otherwise, return false.

function isPalindrome(str){
  if(str.length <= 1){
    return true;
  }
  if(str[0].toLowerCase() !== str[str.length-1].toLowerCase()){
    return false;
  }
  return isPalindrome(str.slice(1, -1));  
}

console.log(isPalindrome('Kayak')); // => true
console.log(isPalindrome('NEVERODDOREVEN')); // => true
console.log(isPalindrome('Tacocat')); // => true
console.log(isPalindrome('SELFLESS')); // => false