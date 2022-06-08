function reverse(word) {
  // 'cat' => 'tac'
  // const wordArray = word.split('');  <--('') splits by each character
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join('');
  // return reversedWord
  return word.split('').reverse().join('');
}
console.log(reverse("tunisia"))

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);

  if (word === reversedWord) {
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  1. make reverse(word) function
  2. split word into array using .split('')
  3. reverse new array using .reverse()
  4. join reversed array using .join('')
  5. return now joined reversed word

  1. make isPalindrome(word) function
  2. if word === reverse(word) function, return true
  3. if word !== reverse(word) function, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

// a function isPalindrome takes one arguement (string)
// if palindrome then return true, else then return false