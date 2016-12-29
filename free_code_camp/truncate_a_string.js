/* freeCodeCamp-Truncate-a-String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

SOLUTION: */

function truncateString(str, num){
 if(str.length > num && num > 3){
  return str.slice(0, num - 3) + "...";
  } else if (str.length > num && num <= 3){
  return str.slice(0, num) + "...";
  } else {
  return str;
    }
 }

/*
Steps to solution: 
1. first if statement: if length of the string is greater than num and num is greater than 3 
2. use str.slice to return starting from 0 index to the length of num - 3. Because you have to add "..." to it.
3. else if length of string is greater than num, but num is less than or equal to 3 
4. use str.slice to return the string until the length of the number and add "..." 
5. else, just return the string as it does not meet any of the above rules.
*/