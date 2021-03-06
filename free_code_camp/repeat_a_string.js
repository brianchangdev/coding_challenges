// freeCodeCamp-Repeat-A-String-Repeat-A-String

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// this is beginner solution

function repeatedStringNumTimes(str, num){
  var newStr = '';

  while(num > 0){
    newStr += str;
    num--;
  }
  return newStr;
}

// RECURSIVE SOLUTION:

function repeatedStringNumTimes(str, num){
  if(num < 0)
    return '';
  if(num === 1)
    return str;
  else
    return str + repeatedStringNumTimes(str, num - 1);
}

// random change