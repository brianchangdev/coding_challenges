/* FreeCodeCamp-Return-Largest-Number-in-Array

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

SOLUTION: Using Nested For Loops */

  function largestOfFour(arr) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
  var largestNum = 0;
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > largestNum){
        largestNum = arr[i][j];
      }
    }
   newArray.push(largestNum);
  }
  return newArray;
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

 
// SOLUTION #2: Using .map() and .reduce() 

  function largestOfFour(arr){
   return arr.map(function(value){
    return value.reduce(function(pV, cV){ 
      if(cV > pV){ 
      return cV; 
      } else { 
      return pV; 
        } 
       }, 0); 
      }); 
    }

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*  Explanation:

1. use .map() to copy all items within the main array to a new array
2. within each inner array, use .reduce() callback function to iterate through and compare its current value to previous value one at a time
3. invoke the initialValue argument and set it to 0 to so previousValue starts at index 0
4. if current value is greater than previous value, return currentValue which is the highest number
5. then the .map function will start populating the copied new array with each highest number from the inner array. 
*/
