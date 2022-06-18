function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      let sum = array[i] + array[j];
      if(sum === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n**2) Quadratic time complexity
  0(n)
*/

/* 
  Add your pseudocode here

  Iterete over the array
  Adding an element of the array to every other elemt in the array 
  Compare the result of the added array to the target array and return true 
  else return false
*/

/*
  Add written explanation of your solution here
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


  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4))
}

module.exports = hasTargetSum;
