/* freeCodeCamp-Chunky-Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Here are some helpful links:

Array.prototype.push() Array.prototype.slice()

SOLUTION: */

function chunkArrayInGroups(arr, size) {
    var newArray = [];
    i = 0;
    n = arr.length;

  while (i < n){
    newArray.push(arr.slice(i, i += size));
  }
  return newArray;
}


/* TEST CASES:

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

HOW TO SOLVE:

Create a new variable in order to be able to .push() the two dimensional array into
Use a while loop to interate through arr
while i is less than the length of arr, call slice to extract starting from i
and exract up to (but not including) i = i + size. Then push into newArray
Loop will repeat until i is no longer less than n. By then the two-dimensional array will be completely pushed into newArray. */