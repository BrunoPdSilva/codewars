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
      array.push(' ', string[i]);
    } else {
      array.push(string[i]);
    }
  }
  return array.join('');
}

/* Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string. */

function firstNonRepeatingLetter(string) {
  let word = string.toLowerCase();
  let x = '';
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
  let positions = '';
  text
    .toLowerCase()
    .split('')
    .forEach(letter =>
      letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122
        ? (positions += ' ' + (letter.charCodeAt() - 96))
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
  let number = n.toString().split('');
  if (number.length > 1) {
    while (number.length > 1) {
      number = number
        .reduce((acc, curr) => (acc += Number(curr)), 0)
        .toString()
        .split('');
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
  const separeteWords = str.toLowerCase().split(' ');

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
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const unicodeList = message.split('').map(letter => {
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
  return unicodeList.join('');
}

/* Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

function generateHashtag(str) {
  if (str.charCodeAt() == 32 || str == '') return false;
  const splitedStr = str.trim().toLowerCase().split(' ');
  const noWhiteSpace = ['#'];

  for (let word of splitedStr) {
    if (word != '')
      noWhiteSpace.push(word.replace(/^./, word[0].toUpperCase()));
  }
  return noWhiteSpace.join('').length > 140 ? false : noWhiteSpace.join('');
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
  const beastLetters = '' + beast[0] + beast[beast.length - 1];
  const dishLetters = '' + dish[0] + dish[dish.length - 1];

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
  let winner = '';

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
  const orderedNumbersArray = numbers.split(' ').sort((a, b) => a - b);

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
      .split('')
      .filter(item => /[0-9]/.test(item))
      .join('')
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
    .split('')
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
    .split('')
    .reduce((acc, curr) => (acc += Number(curr)), 0);
  const reverseSum = Number(sum.toString().split('').reverse().join(''));

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
      .split('')
      .reduce(
        (acc, curr, i) =>
          curr === 'X' ? acc + 10 * (i + 1) : acc + Number(curr) * (i + 1),
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
    return 'yes, ascending';
  } else if (JSON.stringify(array) === JSON.stringify(dscArray)) {
    return 'yes, descending';
  } else {
    return 'no';
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
const countSheeps = arrayOfSheep =>
  arrayOfSheep.reduce((acc, curr) => (curr === true ? acc + 1 : acc), 0);

/* Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN. */

function remainder(n, m) {
  const numbers = [n, m];
  numbers.sort((a, b) => a - b);

  return numbers[0] === 0 ? NaN : parseInt(numbers[1] % numbers[0]);
}

/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow. */

function updateLight(current) {
  return current === 'green'
    ? 'yellow'
    : current === 'yellow'
    ? 'red'
    : 'green';
}

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function squareDigits(num) {
  const digits = String(num).split('');

  const square = digits.map(n => Math.pow(Number(n), 2));

  return Number(square.join(''));
}

/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

function makeNegative(num) {
  return num < 0 ? num : -num;
}

/* Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust). */

function sumOfDifferences(arr) {
  const descendingArray = arr.sort((a, b) => b - a);
  const x = [];

  for (let i = 0; i < descendingArray.length; ++i) {
    if (descendingArray[i + 1] !== undefined) {
      x.push(descendingArray[i] - descendingArray[i + 1]);
    }
  }

  return x.reduce((acc, curr) => acc + curr, 0);
}

/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
  return array.length > 0
    ? array.reduce((acc, curr) => acc + curr, 0) / array.length
    : 0;
}

/* Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _ */

function howManyGifts(maxBudget, gifts) {
  const sorted = gifts.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;

  for (let item of sorted) {
    sum += item;
    sum <= maxBudget ? count++ : count;
  }

  return count;
}

/* Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. 
Write a function to help Bob with this calculation. */

const getVolumeOfCuboid = (l, w, h) => l * w * h;

/* Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting */

const enough = (cap, on, wait) => ((x = on + wait - cap) > 0 ? x : 0);

/* Write a function which converts the input string to uppercase. */

const makeUpperCase = str => str.toUpperCase();

/* Complete the function that takes a sequence of numbers as single parameter. 
Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0 */

function sumEvenNumbers(input) {
  const evenNumbers = test1.filter(n => n % 2 === 0);

  return evenNumbers.reduce((acc, curr) => (acc += curr), 0);
}

/* The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
 */

function numberToPower(number, power) {
  let x = number;

  if (power === 0) return 1;

  for (let i = 1; i < power; i++) {
    x = x * number;
  }

  return x;
}

/* You begin with writing a generic Ship class / struct:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board
var titanic = new Ship(15, 10);
Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, 
then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false */

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt = () => this.draft - this.crew * 1.5 > 20;
}

/* Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs! */

const oddCount = n => Math.floor(n / 2);

/* Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples */

function nthSmallest(arr, pos) {
  const sorted = arr.sort((a, b) => a - b);

  return sorted[pos - 1];
}

/* Task
Given a list of digits, return the smallest number that could be formed from these digits, 
using the digits only once (ignore duplicates). */

function minValue(values) {
  const x = new Set(values.sort((a, b) => a - b));

  return Number([...x].join(''));
}

/* Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal 
to The Product of all the elements of Arr[] except Arr[i]. */

function productArray(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(
      numbers.reduce((acc, curr, index) => {
        return i !== index ? acc * curr : acc * 1;
      }, 1)
    );
  }

  return result;
}

/*  Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers 
in the array until their Sum becomes greater or equal to K.
*/

function minimumSteps(numbers, value) {
  let count = 0;

  const sorted = numbers.sort((a, b) => a - b);
  let sum = sorted[0];

  for (let i = 1; sum < value; i++) {
    sum += sorted[i];
    count++;
  }

  return count;
}

/* 
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated) */

const reverse = array => {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
};

/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  const lowerStr = str.toLowerCase();

  let xCount = 0;
  let oCount = 0;

  lowerStr.split('').forEach(n => {
    n === 'x' ? xCount++ : n === 'o' ? oCount++ : null;
  });

  return xCount === 0 && oCount === 0 ? true : xCount === oCount;
}

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

const check = (a, x) => a.includes(x);

/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];

  const negative = input.filter(n => n < 0).reduce((a, c) => a + c, 0);
  const positive = input.filter(n => n > 0);

  return [positive.length, negative];
}

/* Given an input of an array of digits, return the array with each digit incremented by its position in the array: 
the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, 
only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that */

function incrementer(nums) {
  return nums.length === 0
    ? []
    : nums.map((n, i) =>
        n + i + 1 >= 10
          ? Number(String(n + i + 1)[String(n + i + 1).length - 1])
          : n + i + 1
      );
}

/* Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> []; */

const first = (arr, n) =>
  n === undefined ? [arr[0]] : n === 0 ? [] : arr.slice(0, n);

/* Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type. */

function toNumberArray(stringarray) {
  return stringarray.map(item => item.toString());
}

/* Complete the function which returns the weekday according to the input number: */

function whatday(num) {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return num >= 1 && num <= 7
    ? weekDays[num - 1]
    : 'Wrong, please enter a number between 1 and 7';
}

/* In this Kata, you will be given a string and your task will be to return a list of 
ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special charact */

function solve(s) {
  const arr = s.split('');

  let count = { UP: 0, LOW: 0, NUM: 0, SPC: 0 };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[A-Z]/)) {
      count.UP++;
    } else if (arr[i].match(/[a-z]/)) {
      count.LOW++;
    } else if (arr[i].match(/[0-9]/)) {
      count.NUM++;
    } else if (arr[i].match(/\W|_/)) {
      count.SPC++;
    }
  }

  return [count.UP, count.LOW, count.NUM, count.SPC];
}

/* The Office V - Find a Chair */
function meeting(x, need) {
  const spareChairsOnEachRoom = [];
  const chairsTaken = [];

  if (need === 0) return 'Game On';

  x.forEach(item => {
    const busyChairs = item[0].length;
    const totalChairs = item[1];

    spareChairsOnEachRoom.push(
      totalChairs - busyChairs <= 0 ? 0 : totalChairs - busyChairs
    );
  });

  let s = 0;
  for (let chair of spareChairsOnEachRoom) {
    if (s !== need) {
      s += chair;
      chairsTaken.push(chair);
    } else {
      break;
    }
  }

  return s < need ? 'Not enough!' : chairsTaken;
}
/* https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript */

/* Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. 
Assume that argument is an integer. */

function getSumOfDigits(integer) {
  return String(integer)
    .split('')
    .reduce((a, c) => a + Number(c), 0);
}

/* Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". */

const disemvowel = str =>
  str
    .split('')
    .filter(letter => !letter.match(/[a|e|i|o|u]/i))
    .join('');

/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation */

function basicOp(o, v1, v2) {
  switch (o) {
    case '+':
      return v1 + v2;
    case '-':
      return v1 - v2;
    case '*':
      return v1 * v2;
    case '/':
      return v1 / v2;
  }
}

/* The string given to your function has had an "egg" inserted directly after each consonant. 
You need to return the string before it became eggcoded. */

function unscrambleEggs(word) {
  return word.replace(/egg/g, '');
}

/* In this kata you will create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out. */

function filter_list(l) {
  return l.filter(i => typeof i === 'number');
}

/* Your task is to make two functions ( max and min that receive a list of integers as input,
and return the largest and lowest number in that list, respectively. */

const min = l => Math.min(...l);
const max = l => Math.max(...l);

/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
and the negatives become positives. */

const invert = arr =>
  arr.map(n => (n >= 0 ? Number(`-${n}`) : Number(String(n).replace('-', ''))));

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).*/

function getCount(str) {
  let counter = 0;

  str.split('').forEach(l => (l.match(/[a|e|i|o|u]/) ? counter++ : counter));

  return counter;
}

/* The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. 
'02078834982' with no whitespace or special characters, else return "Not a phone number". */

function isItANum(str) {
  const number = str.split("").filter(n => n.match(/[0-9]/)).join("")

  return number.length === 11 && number[0] === "0" ? number : "Not a phone number";
}


/* Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow. */

function betweenExtremes(numbers) {
  const sorted = numbers.sort((a, b) => b - a);

  return sorted[0] - sorted[sorted.length - 1];
}

/* 
Task:
Your job here is to write a function, which takes a sorted array ary and a value val, and returns the lowest index where you 
could insert val to maintain the sorted-ness of the array. 
The input array will always be sorted in ascending order. It may contain duplicates. */

const keepOrder = (ary, val) => [...ary, val].sort((a, b) => a - b).indexOf(val);
