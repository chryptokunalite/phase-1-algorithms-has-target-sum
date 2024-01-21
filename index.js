function hasTargetSum(array, target){
  //For every index/number in the array...
  for (let i = 0; i <= array.length; i++){
  //...we'll iterate over every other index/number in the array...
    for(let j = i+1; j <= array.length; j++){
  //...for each index of i and j compared we'll check if when added to each other they equal the target sum...
      if (array[i] + array[j] === target){
  //...if they do return true...
        return true
      }
    }
  //...if they do not, return false. 
  } return false
}
/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here: 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
