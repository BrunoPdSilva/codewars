/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.*/

function arrayDiff(a, b) {
  b.forEach((number) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === number) {
        a.splice(i, 1);
        i--;
      }
    }
  });
  return a;
}

/* Complete the solution so that the function will break up camel casing, using a space between words. */
// camelCasing -> "camel Casing"

function splitCamel(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      array.push(" ", string[i]);
    } else {
      array.push(string[i]);
    }
  }
  return array.join("");
}

/* Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string. */

function firstNonRepeatingLetter(string) {
  let word = string.toLowerCase();
  let x = "";
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
      x += word[i];
    }
  }

  if (x.length > 0) {
    let index = word.indexOf(x[0]);
    return string[index];
  } else {
    return x;
  }
}

/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it. */

function alphabetPosition(text) {
  let positions = "";
  text
    .toLowerCase()
    .split("")
    .forEach((letter) =>
      letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122
        ? (positions += " " + (letter.charCodeAt() - 96))
        : positions
    );

  return positions.trim();
}

/* There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

/* Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */
/*  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */

function digital_root(n) {
  let number = n.toString().split("");
  if (number.length > 1) {
    while (number.length > 1) {
      number = number
        .reduce((acc, curr) => (acc += Number(curr)), 0)
        .toString()
        .split("");
    }
    return Number(number);
  }
  return n;
}

digital_root(493193);

/* Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string. If two words score the same, return the word that 
appears earliest in the original string. */

function high(str) {
  const separeteWords = str.toLowerCase().split(" ");

  const eachWordScoreArray = separeteWords.map(word => {
    let wordValue = 0;
    for (let i = 0; i < word.length; i++) {
      wordValue += word[i].charCodeAt() - 96;
    }
    return wordValue;
  });

  const biggestWordScore = Math.max(...eachWordScoreArray);
  const index = eachWordScoreArray.indexOf(biggestWordScore);

  return separeteWords[index];
}