/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.*/

function arrayDiff(a, b) {
  b.forEach(number => {
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
    .forEach(letter =>
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

/* You need to write regex that will validate a password to make sure it meets the following criteria:
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number */

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const unicodeList = message.split("").map(letter => {
    let uniCode = letter.charCodeAt() - 96;

    if (uniCode <= 13 && uniCode >= 1 && uniCode <= 26) {
      return alphabet[uniCode - 1 + 13];
    } else if (uniCode > 13 && uniCode >= 1 && uniCode <= 26) {
      return alphabet[uniCode - 1 - 13];
    } else if (uniCode >= -31 && uniCode <= -6) {
      let upperCode = uniCode + 32;

      if (upperCode <= 13 && upperCode >= 1 && upperCode <= 26) {
        return alphabet[upperCode - 1 + 13].toUpperCase();
      } else if (upperCode > 13 && upperCode >= 1 && upperCode <= 26) {
        return alphabet[upperCode - 1 - 13].toUpperCase();
      }
    }
    return letter;
  });
  return unicodeList.join("");
}

/* Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

function generateHashtag(str) {
  if (str.charCodeAt() == 32 || str == "") return false;
  const splitedStr = str.trim().toLowerCase().split(" ");
  const noWhiteSpace = ['#'];

  for (let word of splitedStr) {
    if (word != "") noWhiteSpace.push(word.replace(/^./, word[0].toUpperCase()))
  }
  return noWhiteSpace.join("").length > 140 ? false : noWhiteSpace.join("");
}