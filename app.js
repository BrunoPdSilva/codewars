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
  const noWhiteSpace = ["#"];

  for (let word of splitedStr) {
    if (word != "")
      noWhiteSpace.push(word.replace(/^./, word[0].toUpperCase()));
  }
  return noWhiteSpace.join("").length > 140 ? false : noWhiteSpace.join("");
}

/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0 */

function sameCase(a, b) {
  if (
    (/[A-Z]/.test(a) && /[A-Z]/.test(b)) ||
    (/[a-z]/.test(a) && /[a-z]/.test(b))
  ) {
    return 1;
  } else if (/[A-Za-z]/.test(a) && /[A-Za-z]/.test(b)) {
    return 0;
  } else if (/[^A-Za-z]/.test(a) || /[^A-Za-z]/.test(b)) {
    return -1;
  }
}

/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast. */

function feast(beast, dish) {
  const beastLetters = "" + beast[0] + beast[beast.length - 1];
  const dishLetters = "" + dish[0] + dish[dish.length - 1];

  return beastLetters === dishLetters ? true : false;
}

/* Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie) */

function points(games) {
  let result = 0;

  games.forEach(score => {
    if (score[0] > score[2]) {
      result += 3;
    } else if (score[0] === score[2]) {
      result += 1;
    }
  });

  return result;
}

/* Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first. */

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let winner = "";

  if (fighter1.name === firstAttacker) {
    while (fighter1.health > 0 || fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        winner = fighter1.name;
        break;
      }

      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        winner = fighter2.name;
        break;
      }
    }
  } else {
    while (fighter1.health > 0 || fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        winner = fighter2.name;
        break;
      }

      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        winner = fighter1.name;
        break;
      }
    }
  }
  return winner;
}

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

function highAndLow(numbers) {
  const orderedNumbersArray = numbers.split(" ").sort((a, b) => a - b);

  const lowestNumber = orderedNumbersArray[0];
  const highestNumber = orderedNumbersArray[orderedNumbersArray.length - 1];

  return `${highestNumber} ${lowestNumber}`;
}

/* 
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Your task is to return a number from a string.
*/

const filterString = str =>
  Number(
    str
      .split("")
      .filter(item => /[0-9]/.test(item))
      .join("")
  );

/* 
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

function wordsToMarks(string) {
  return string
    .split("")
    .reduce((acc, curr) => (acc += curr.charCodeAt() - 96), 0);
}

/* 
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/

function numberJoy(n) {
  const sum = String(n)
    .split("")
    .reduce((acc, curr) => (acc += Number(curr)), 0);
  const reverseSum = Number(sum.toString().split("").reverse().join(""));

  return n % sum === 0 && sum * reverseSum === n ? true : false;
}

/* ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10 */

function validISBN10(isbn) {
  if (/^[0-9]{9}[X0-9]$/.test(isbn)) {
    const product = isbn
      .split("")
      .reduce(
        (acc, curr, i) =>
          curr === "X" ? acc + 10 * (i + 1) : acc + Number(curr) * (i + 1),
        0
      );

    return product % 11 === 0 ? true : false;
  } else {
    return false;
  }
}

/* 
Given the string representations of two integers, return the string representation of the sum of those integers.

For example: sumStrings('1','2') // => '3' */

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString(10);
}

/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

function isSortedAndHow(array) {
  const ascArray = array.slice();
  const dscArray = array.slice();

  ascArray.sort((a, b) => a - b);
  dscArray.sort((a, b) => b - a);

  if (JSON.stringify(array) === JSON.stringify(ascArray)) {
    return "yes, ascending";
  } else if (JSON.stringify(array) === JSON.stringify(dscArray)) {
    return "yes, descending";
  } else {
    return "no";
  }
}

/* Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
*/

function inAscOrder(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);

  return JSON.stringify(sortedArray) === JSON.stringify(arr) ? true : false;
}

/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000. */

function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    n % i === 0 ? count++ : null;
  }

  return count;
}

/* You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

Return an array containing all the possibilities you can reach substituing the ? for a value.
*/

/* const test1 = "101?"; // -> ['1010', '1011']
const test2 = "1?1?"; // -> ['1010', '1110', '1011', '1111']

function possibilities(str) {

}
 */

/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */
const countSheeps = arrayOfSheep => arrayOfSheep.reduce((acc, curr) => curr === true ? acc + 1 : acc, 0);
