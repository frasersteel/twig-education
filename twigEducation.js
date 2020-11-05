/*
    Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
    equally sized arrays.

    Where the size of the original array cannot be divided equally by N, the final part should have a length equal
    to the remainder.
 */

 /**
 * [Divides array into equally sized arrays]
 * @param  {Array} array [The oringinal array]
 * @param  {Number} arrSize [The number of arrays the result should be divided into]
 * @return {Array[][]}      [Array of arrSize arrays]
 */


const sortArray = (array, arrSize) => {
  // if less than 2, no division required
  if (arrSize < 2){
    return array;
  }
  let normalArraySize = Math.ceil(array.length / arrSize);
  let finalArray = [];
  let counter = 0;
  for(var i = 0; i<arrSize; i++){
    // create n empty arrays
    finalArray.push([]);
  }
  for(var i = 0; i < arrSize; i++){
    for(var x = 0; x<normalArraySize; x++) {
      // once there is no items left we break out of the condition
      if(array[counter] === undefined){
        break;
      }
      finalArray[i].push(array[counter]);
      counter++;
    }
  }
  return finalArray;
}


console.log(sortArray([1,2,3,4,5], 3));
