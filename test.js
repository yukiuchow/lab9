const assert = require('assert');

// Expected Behavior: Convert the input to all upper case

function convertToUpperCase(inputName){
    return inputName.toUpperCase()
}


/* 
  Add test cases below
*/

assert.strictEqual(convertToUpperCase("Daniel"), "DANIEL", "Daniel => DANIEL")
assert.strictEqual(convertToUpperCase("daniel"), "DANIEL", "daniel => DANIEL")
assert.strictEqual(convertToUpperCase(""), "", "empty => empty")

console.log("All Tests Passed.")