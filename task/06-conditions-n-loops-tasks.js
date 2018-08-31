
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
export function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
export function getFactorial(n) {
  let result = 1;
  let x = 1;
  while (x <= n) {
    result = result * x;
    x += 1;
  }
  return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
export function getSumBetweenNumbers(n1, n2) {
  let result = n1;
  for (let i=n1+1;i<=n2;i++){
    result += i;
  }
  return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
export function isTriangle(a, b, c) {
  let arr = Array.prototype.slice.call(arguments, 0);
  arr = arr.sort((a, b) => b-a);
  return arr[0] < (arr[1] + arr[2]);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
export function doRectanglesOverlap(rect1, rect2) {
  let var1 = rect2.top >= rect1.top
    && rect2.top < (rect1.top + rect1.width)
    && rect2.left >= rect1.left
    && rect2.left < (rect1.left + rect1.height);
  let var2 = rect1.top >= rect2.top
    && rect1.top < (rect2.top + rect2.width)
    && rect1.left >= rect2.left
    && rect1.left < (rect2.left + rect2.height);
  return var1 || var2;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
export function isInsideCircle(circle, point) {
  return (Math.pow((point.x - circle.center.x), 2) + Math.pow((point.y - circle.center.y), 2)) < Math.pow(circle.radius, 2);
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
export function findFirstSingleChar(str) {
  let arr = str.split('');
  let arrayOnlyOnceRepeatedChars = [];
  arr.forEach(letter => {
    let repArr = arr.filter(el => el === letter);
    if (repArr.length === 1) {
      arrayOnlyOnceRepeatedChars.push(letter);
    }
  });
  return arrayOnlyOnceRepeatedChars.length ? arrayOnlyOnceRepeatedChars[0] : null;
}


/**
 * Returns the string representation of math interval, specified by two points and
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
export function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let firstBracket = isStartIncluded ? '[' : '(';
  let secondBracket = isEndIncluded ? ']' : ')';
  if (a > b) {
    let that = a;
    a = b;
    b = that;
  }
  return `${firstBracket}${a}, ${b}${secondBracket}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
export function reverseString(str) {
  let arr = str.split('');
  let result = arr.reverse();
  return result.join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
export function reverseInteger(num) {
  let str = num.toString();
  let arr = str.split('');
  let revArr = arr.reverse();
  let result = revArr.join('');
  return Number(result);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
export function isCreditCardNumber(ccn) {
  let value = ccn.toString();
  if (/[^0-9-\s]+/.test(value)){
    return false;
  }
  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  value = value.replace(/\D/g, '');
  for (let n = value.length - 1; n >= 0; n--) {
    let cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
export function getDigitalRoot(num) {
  let arr = num.toString().split('').map(el => Number(el));
  let summ = arr.reduce((accum, current) => accum + current);
  return summ > 9 ? getDigitalRoot(summ) : summ;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
export function isBracketsBalanced(str) {
  let openBrackets = ['[', '(', '{', '<'];
  let closeBrackets = [']', ')', '}', '>'];
  let arr = str.split('');
  let storageArr = [];

  let flag = true;
  arr.forEach(bracket => {
    if (openBrackets.some(el => el === bracket)) {
      storageArr.push(bracket);
    } else {
      if (!storageArr.length) {
        flag = false;
      }
      let index = openBrackets.indexOf(storageArr[storageArr.length-1]);
      if (closeBrackets[index] === bracket){
        storageArr.pop();
      } else {
        flag = false;
      }
    }
  });
  return !storageArr.length && flag;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
export function timespanToHumanString(startDate, endDate) {
  let differenceInSec = (endDate - startDate) / 1000;
  let result;
  switch (true) {
  case differenceInSec > 0 && differenceInSec <= 45:
    result = 'a few seconds ago';
    break;
  case differenceInSec > 45 && differenceInSec <= 90:
    result = 'a minute ago';
    break;
  case differenceInSec > 90 && differenceInSec <= 45*60:
    result = `${Math.round((differenceInSec / 60 + '').split('.')[1] === '5' ? (differenceInSec/60)-0.1 : differenceInSec/60)} minutes ago`;
    break;
  case differenceInSec > 45*60 && differenceInSec <= 90*60:
    result = 'an hour ago';
    break;
  case differenceInSec > 90*60 && differenceInSec <= 22*60*60:
    result = `${Math.round((differenceInSec /60/60 + '').split('.')[1] === '5' ? (differenceInSec/60/60)-0.1 : differenceInSec/60/60)} hours ago`;
    break;
  case differenceInSec > 22*60*60 && differenceInSec <= 36*60*60:
    result = `a day ago`;
    break;
  case differenceInSec > 36*60*60 && differenceInSec <= 25*24*60*60:
    result = `${Math.round((differenceInSec /60/60/24 + '').split('.')[1] === '5' ? (differenceInSec/60/60/24)-0.1 : differenceInSec/60/60/24)} days ago`;
    break;
  case differenceInSec > 25*24*60*60 && differenceInSec <= 45*24*60*60:
    result = `a month ago`;
    break;
  case differenceInSec > 45*24*60*60 && differenceInSec <= 345*24*60*60:
    result = `${Math.round((differenceInSec /60/60/24/30))} months ago`;
    break;
  case differenceInSec > 345*24*60*60 && differenceInSec <= 545*24*60*60:
    result = `a year ago`;
    break;
  case differenceInSec > 546*24*60*60:
    result = `${Math.round((differenceInSec /60/60/24/365))} years ago`;
    break;
  }
  return result;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
export function toNaryString(num, n) {
  let stack = [];
  let naryString = '';
  while (num > 0) {
    let rem = num % n;
    stack.push(rem);
    num = Math.floor(num/n);
  }
  while(stack.length){
    naryString = naryString + stack.pop();
  }
  return naryString;
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
export function getCommonDirectoryPath(pathes) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
export function getMatrixProduct(m1, m2) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
export function evaluateTicTacToePosition(position) {
  /* implement your code here */
  throw new Error('Not implemented');
}
