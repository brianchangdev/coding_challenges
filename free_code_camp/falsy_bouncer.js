/* freeCodeCamp-Falsy-Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:

Boolean Objects Array.prototype.filter()

SOLUTION: */

function bouncer(arr){

  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

/* EXPLANATION:

call the built in filter function method to iterate through array
filter function will then call the Boolean object on each element in array
Boolean object: Any object whose value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement.
The result is the filtered array with only true values. */

