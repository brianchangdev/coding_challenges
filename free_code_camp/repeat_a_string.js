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